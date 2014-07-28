/*global dust:true, History:true, Modernizr:true */

define(['jquery', 'history', 'dust', 'dustTemplate1'], function ($) {

'use strict';

	var CwsC = {
	
		multiple : 3,//default 3, no of items per carousel page
		lang : 'en',//default en
		carouselContent : '',// data
		carouselUiContent : '',// ui label data
		carouselContainer : '',
		carouselContentLength : '',
		contentIndex : '',//index of the last shown project item
		bHasCssTransforms : false,// test with modernizer
		History : window.History,//history lib in use
		pageTitle : document.title,
		startItem: '',
		currentPage: '',
		newMultiple: '',
		newLang: '',
		newDirection: '',
		introShow: true,
		newIntroShow: undefined,
		actionIntro: false,
		//prevBtn: $('.cwsCprev'),
		//nextBtn: $('.cwsCprev'),
		isTransitioning: false,

		showPage : function(direction, index, newLang, newMultiple, newIntroShow){
			console.log('OOO showPage - direction: '+direction+', index: '+index+', newLang: '+newLang+', newMultiple: '+newMultiple+', newIntroShow: '+newIntroShow);

			if (newMultiple !== undefined) {
				this.multiple = newMultiple;
			}
			if (index !== undefined){
				this.contentIndex = index;
			}
			if (newIntroShow !== undefined){
				this.introShow = newIntroShow;
			}
			if (direction === 'forward'){
				this.contentIndex += this.multiple;
			}
			if (direction === 'back'){
				this.contentIndex -= this.multiple;
			}
			this.currentPage = this.contentIndex/this.multiple;

			console.log('PUSH STATE: content index- '+this.contentIndex +'- page title' + this.pageTitle + ' page=' + this.currentPage + ' multiple=' + this.multiple + ' lang=' + this.lang + ' intro=' + this.introShow);
			this.History.pushState({state: this.contentIndex,
										rand: Math.random(),
										direction: direction,
										lang: this.lang,
										multiple: this.multiple,
										introShow: this.introShow},
									this.pageTitle + ' - Page ' + this.currentPage,
									'?page=' + this.currentPage + '+multiple=' + this.multiple + '+lang=' + this.lang + '+intro=' + this.introShow);
			
		},

		buildControls : function(){// build the controls and intro with lang
			var output;
			dust.render("cwsUI", this.carouselContent, function(err, out) {//'cwsUI' is a compiled dust template already registered. Its loaded by requirejs
				if(err !== null){
					alert("dust ui templ error: " + err);
				}
				output = out;
			});
			return output;
		},


		buildUI : function(bIsRebuild) {// build ui on load, on lang change refresh with new data. Bind ui btns and statechange event
			var renderTarget = $('.carouselWrap');//elem to create it inside
			renderTarget.html(this.buildControls());
			this.carouselContainer = renderTarget.children('.carousel');
			this.carouselContainer.addClass('multiple'+CwsC.multiple);
			if (bIsRebuild){// ie from lang select
				bIsRebuild = 0;
				this.showPage(undefined, undefined, CwsC.lang, undefined, undefined);
			} else {
				renderTarget.on('click','.cwsCprev, .cwsCnext', function(event) {
					if(CwsC.isTransitioning){
						return false;
					} else {
						if (!$(this).hasClass('disabled')){
							var direction = 'forward';
							if ($(this).hasClass('cwsCprev')){
								direction = 'back';
							}
							CwsC.transitionContent(direction);
						}
					}
					event.preventDefault();
				});

				/* STATECHANGE BINDING */
				History.Adapter.bind(window,'statechange', function() {// ie both browser back/fwd btn and app ui btns and initial load - all logic to manipulate page should be here
					var State = History.getState();
					console.log('STATECHANGE, state info: ' + State.data.state + ' direction: ' + State.data.direction + ' mult: ' + State.data.multiple+ ' lang: ' + State.data.lang+ ' intro: ' + State.data.introShow);
					
					//fix Object.keys for ie8 - http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
					Object.keys = Object.keys || (function () {
						var hasOwnPropertyFlag = Object.prototype.hasOwnProperty,
							hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
							DontEnums = [
								'toString',
								'toLocaleString',
								'valueOf',
								'hasOwnProperty',
								'isPrototypeOf',
								'propertyIsEnumerable',
								'constructor'
							],
							DontEnumsLength = DontEnums.length;
						return function (o) {
							if (typeof o != "object" && typeof o != "function" || o === null)
								throw new TypeError("Object.keys called on a non-object");
							var result = [];
							for (var name in o) {
								if (hasOwnPropertyFlag.call(o, name))
									result.push(name);
							}
							if (hasDontEnumBug) {
								for (var i = 0; i < DontEnumsLength; i++) {
									if (hasOwnPropertyFlag.call(o, DontEnums[i]))
										result.push(DontEnums[i]);
								}
							}
							return result;
						};
					})();


					if (Object.keys(State.data).length !== 0) {
						if (State.data.direction !== CwsC.newDirection) {
							CwsC.newDirection = State.data.direction;
						}
						if (State.data.introShow !== CwsC.introShow) {// back pressed after toggle intro or value in pasted url
							CwsC.introShow = State.data.introShow;
							if (CwsC.introShow !== true){
								$('#intro').addClass('hidden');
							} else {
								$('#intro').removeClass('hidden');
							}
							return;
						}

						if (CwsC.introShow !== true){//wip
							$('#intro').addClass('hidden');
						} else {
							$('#intro').removeClass('hidden');
						}

						if(CwsC.actionIntro === true){
							CwsC.actionIntro = false;
							return;
						}

						if (State.data.state !== CwsC.contentIndex) {// back button pressed, go to previous page
							console.log('back button pressed, go to previous page. cont index= '+CwsC.contentIndex+ 'state = '+State.data.state+' direction: '+State.data.direction);
							//CwsC.newDirection = State.data.direction;//as its from back btn
							//todo set global direction here for swipe? will be set above
							//console.log('>>>>>>>>>>>>>State.data.direction= '+State.data.direction);
							
							
							if(State.data.state < CwsC.contentIndex){// back buttn pressed, determine which direction to restore
								CwsC.newDirection = 'back';
							} else if (State.data.state > CwsC.contentIndex){
								CwsC.newDirection = 'forward';
							}
							console.log('CwsC.newDirection= '+CwsC.newDirection);
							CwsC.transitionContent(CwsC.newDirection, true);//?????????????????????
							
							CwsC.contentIndex = State.data.state; //set so correct state from history when fade below
						}

						CwsC.carouselContainer.fadeTo(500, 0, function() {
							console.log('F@de.......................');
							if (State.data.lang !== CwsC.lang) {// back button pressed, go to previous lang
								CwsC.lang = State.data.lang;
								CwsC.loadData(false, true);
							} else if (State.data.multiple !== CwsC.multiple) {// back button pressed, go to previous multiple
								CwsC.multiple = State.data.multiple;
								CwsC.renderItems(false);
							} else {// all other renders. ie: normal load and ui btns AND back l/r states driven by history
								CwsC.renderItems(false);
							}
						});

					} else {
						history.back();//no State.data left, so do NORMAL history back to prev site(note lowercase h)
					}

				});

				// delegate click on 'set multiple' control
				renderTarget.on('click', '#setMultipleControl li', function() {
					var currMultiple = $(this).index()+1;
					if(currMultiple !== CwsC.multiple){
						CwsC.setMultiple(currMultiple);
					}
				});
				
				// delegate click on 'set lang' control
				renderTarget.on('click', '#setLangControl li', function() {
					var currId = $(this).attr('id');
					if(currId !== CwsC.lang){
						CwsC.setLang(currId);
					}
				});

				// delegate click on 'home/intro/contact' overlay close
				renderTarget.on('click', '#intro > .hide', function() {
					CwsC.introShow = false;
					CwsC.actionIntro = true;
					CwsC.showPage(undefined, undefined, undefined, undefined, CwsC.introShow);
				});

				// delegate click on 'home/intro/contact' overlay open
				renderTarget.on('click', '#toggleIntro', function() {
					CwsC.introShow = true;
					CwsC.actionIntro = true;
					CwsC.showPage(undefined, undefined, undefined, undefined, CwsC.introShow);
				});

				this.showPage(undefined, CwsC.startItem, undefined, undefined, CwsC.introShow);//show first set on load, potentially based on referrer

			}
			this.markLang(this.lang);// mark on page initial load and lang change

		},

		loadData : function(bIsRebuild, reloadData) {// load json - todo use beforeSend to set spinner
			$.ajax({
				url: 'json/cws_'+CwsC.lang+'.json',
				dataType: 'json',
				cache: false,
				success: function(data) {
					CwsC.carouselContent = data.cwsData;//data
					CwsC.carouselUiContent = data.cwsData.i18n;//ui labels data
					CwsC.carouselContentLength = CwsC.carouselContent.projects.length;// length of the projects data 
					if (!reloadData){
						CwsC.buildUI(bIsRebuild);
					} else {
						//console.log('back button hit after a lang change');
						CwsC.renderItems(true);
					}
				},
				error: function() {
					alert('json failed to load...');
				}
			});
		},

		renderItems : function(refreshLang) {
			var projData, uiData, mergedJson,
				carouselBuffer = '',
				incrementBuffer = function(err, output){
					if(err !== null){
						alert("dust error proj templ: " + err);
					}
					carouselBuffer += output;
				};
		
			if (refreshLang){
				//rebuild controls with new lang when back button after lang change
				var buffer = $(CwsC.buildControls());
				$('#intro').replaceWith(buffer.slice(0,1));
				if(CwsC.introShow === true){
					$('#intro').removeClass('hidden');//and remove hidden if req
				}
				$('#controls').replaceWith(buffer.slice(1,2));
				CwsC.markLang(CwsC.lang);
			}


			CwsC.carouselContainer.empty().removeClass('multiple1 multiple2 multiple3 multiple4').addClass('multiple'+CwsC.multiple);//cant remove fwd-back classes here as they will animate
			CwsC.markMultiple(CwsC.multiple);

			//reduce CwsC.contentIndex by multiple and iterate dust
			CwsC.contentIndex = CwsC.contentIndex - CwsC.multiple;
			for (var i=0; i < CwsC.multiple; i++) {
				projData = CwsC.carouselContent.projects[CwsC.contentIndex];
				uiData = CwsC.carouselUiContent;
				mergedJson = dust.makeBase(uiData);
				mergedJson = mergedJson.push(projData);
				if (CwsC.contentIndex < CwsC.carouselContentLength) {
					dust.render('cwsProjects', mergedJson, incrementBuffer);//'cwsProjects' is a compiled dust template already registered. Its loaded by requirejs
				}
				CwsC.contentIndex++;
			}

			var transitionInClass;
			console.log('new dir: '+CwsC.newDirection);
			if (CwsC.newDirection === 'back'){
				transitionInClass = 'forward';
			} else if (CwsC.newDirection === 'forward'){
				transitionInClass = 'back';
			} else {
				transitionInClass = '';
			}
			CwsC.carouselContainer.html(carouselBuffer).addClass('noTransition').removeClass(CwsC.newDirection).addClass(transitionInClass);
			var height = CwsC.carouselContainer[0].offsetHeight;//force repaint 
			CwsC.carouselContainer.removeClass('noTransition').removeClass(transitionInClass);

			CwsC.carouselContainer.fadeTo(500, 1, function(){
				CwsC.setNav();
				CwsC.isTransitioning = false;
			});
			
			console.log('________________________________end renderItems');
		},

		transitionContent : function(direction, bIsHistoryDriven) {
			console.log('xxxxxx TRANSITION CONTENT DIRECTION: '+direction+' bIsHistoryDriven: '+bIsHistoryDriven);
			CwsC.isTransitioning = true;//TRANSITIONING 
			if (CwsC.bHasCssTransforms){// wait for n transitions to end (sequenced)
				var transitionCount = 0;
				CwsC.carouselContainer.addClass(direction).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
					transitionCount++;
					if (transitionCount === CwsC.carouselContainer.children().length){
						CwsC.carouselContainer.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
						if(bIsHistoryDriven !== true){
							CwsC.showPage(direction, undefined, undefined, undefined, undefined);
						} else {
							console.log('NOT history driven trans');
							//return true;
						}
					}

				});

			} else {// no transitions
				if(bIsHistoryDriven !== true){
					CwsC.showPage(direction, undefined, undefined, undefined, undefined);
				}
			}
		},
		markMultiple : function(newMultiple) {// mark the menu selection for multiple
			var multipleMenu = $('#setMultipleControl');
			multipleMenu.find('li').removeClass('active');
			multipleMenu.find('li:eq('+ --newMultiple +')').addClass('active');
		},

		setMultiple : function(newMultiple) {// action the new multiple
			this.multiple = newMultiple;
			this.showPage(undefined, CwsC.multiple, undefined, newMultiple, CwsC.introShow);
		},

		markLang : function(newLang) {// mark the menu selection for language
			var langMenu = $('#setLangControl');
			langMenu.find('li').removeClass('active');
			langMenu.find('#'+ newLang).addClass('active');
		},

		setLang : function(newLang) {// action the new lang
			//console.log('action newLang: ' , newLang);
			this.lang = newLang;
			this.carouselContainer.fadeTo(500, 0.2, function(){
				CwsC.loadData(1);//1= only refresh data
			});
		},

		setNav : function() {// ui paging back/fwd buttons toggle inactive state
			var next = $('.cwsCnext'),
				prev = $('.cwsCprev');
			if (this.contentIndex < this.carouselContentLength ) {
				next.removeClass('disabled').attr('title', this.carouselContent.i18n.uInext);
			} else {
				next.addClass('disabled').attr('title', '');
			}
			if (this.contentIndex <= this.multiple) {
				prev.addClass('disabled').attr('title', '');
			} else {
				prev.removeClass('disabled').attr('title', this.carouselContent.i18n.uIprevious);
			}
		},

		init : function() {
			var pageFromUrl = 0,
				urlLocationType = '';
			if (Modernizr.csstransforms3d){
				this.bHasCssTransforms = true;
			}

			// extract the page no, multiple and lang from url, if its present (eg bookmark, refresh, pasted/shared url)
			if (window.location.search !== ''){//history-enabled
				urlLocationType = window.location.search;
			} else if (window.location.hash !== ''){//non-history enabled
				urlLocationType = window.location.hash;
			}
			if (urlLocationType !== ''){
				pageFromUrl = parseInt((urlLocationType.split('=')[1]).split('+')[0], 10);
				this.multiple = parseInt(urlLocationType.split('+multiple=')[1].split('+lang=')[0], 10);
				this.lang = urlLocationType.split('+lang=')[1].split('+intro=')[0];
				this.introShow = urlLocationType.split('+intro=')[1] == 'true' ? true : false;//ie convert string 'true' to a bool
			}

			if(pageFromUrl !== 0){//ie it's a bookmarked/pasted url
				this.startItem = pageFromUrl*this.multiple;
			} else {
				this.startItem = this.multiple;
			}

			this.loadData(0);//0= rebuild full ui
		}

	};

	$(document).ready(CwsC.init());

});
