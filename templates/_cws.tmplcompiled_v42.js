//projects module
//(function(){dust.register("cwsProjects",body_0);function body_0(chk,ctx){return chk.write("<article> <h3>").reference(ctx.get("projectName"),ctx,"h").write("</h3> <dl> <dt>").reference(ctx.get("uIclient"),ctx,"h").write(":</dt> <dd>").reference(ctx.get("client"),ctx,"h").write("</dd> <dt>").reference(ctx.get("uIagency"),ctx,"h").write(":</dt> <dd>").reference(ctx.get("agency"),ctx,"h").write("</dd> <dt>").reference(ctx.get("uIprojectDescription"),ctx,"h").write(":</dt> <dd>").reference(ctx.get("projectDescription"),ctx,"h").write("</dd> <dt>").reference(ctx.get("uIworkUndertaken"),ctx,"h").write(":</dt> <dd>").reference(ctx.getPath(false,["extendedInfo","workUndertaken"]),ctx,"h",["s"]).write("</dd> ").exists(ctx.getPath(false,["extendedInfo","otherDetails"]),ctx,{"block":body_1},null).write(" ").exists(ctx.getPath(false,["assets","images"]),ctx,{"block":body_3},null).write(" ").exists(ctx.getPath(false,["assets","links"]),ctx,{"block":body_5},null).write(" </dl> </article>");}function body_1(chk,ctx){return chk.write(" <dt>").reference(ctx.get("uIotherDetails"),ctx,"h").write(":</dt> <dd> <ol> ").section(ctx.getPath(false,["extendedInfo","otherDetails"]),ctx,{"block":body_2},null).write(" </ol> </dd> ");}function body_2(chk,ctx){return chk.write(" <li>").reference(ctx.getPath(true,[]),ctx,"h").write("</li> ");}function body_3(chk,ctx){return chk.write(" <dt>").reference(ctx.get("uIimages"),ctx,"h").write(":</dt> <dd> <ul> ").section(ctx.getPath(false,["assets","images"]),ctx,{"block":body_4},null).write(" </ul> </dd> ");}function body_4(chk,ctx){return chk.write(" <li><img src=\"").reference(ctx.getPath(true,["url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(true,["title"]),ctx,"h").write("\"/></li> ");}function body_5(chk,ctx){return chk.write(" <dt>").reference(ctx.get("uIlinks"),ctx,"h").write(":</dt> <dd> <ul> ").section(ctx.getPath(false,["assets","links"]),ctx,{"block":body_6},null).write(" </ul> </dd> ");}function body_6(chk,ctx){return chk.write(" <li><a href=\"").reference(ctx.getPath(true,["url"]),ctx,"h").write("\" title=\"").reference(ctx.getPath(true,["title"]),ctx,"h").write("\" target=\"_blank\">").reference(ctx.getPath(true,["title"]),ctx,"h").write("</a></li> ");}return body_0;})();
//good(function(){dust.register("cwsProjects",body_0);function body_0(chk,ctx){return chk.write("<article><h3>").reference(ctx._get(false, ["projectName"]),ctx,"h").write("</h3><dl><dt>").reference(ctx._get(false, ["uIclient"]),ctx,"h").write(":</dt><dd>").reference(ctx._get(false, ["client"]),ctx,"h").write("</dd><dt>").reference(ctx._get(false, ["uIagency"]),ctx,"h").write(":</dt><dd>").reference(ctx._get(false, ["agency"]),ctx,"h").write("</dd><dt>").reference(ctx._get(false, ["uIprojectDescription"]),ctx,"h").write(":</dt><dd>").reference(ctx._get(false, ["projectDescription"]),ctx,"h").write("</dd><dt>").reference(ctx._get(false, ["uIworkUndertaken"]),ctx,"h").write(":</dt><dd>").reference(ctx._get(false,["extendedInfo","workUndertaken"]),ctx,"h",["s"]).write("</dd>").exists(ctx._get(false,["extendedInfo","otherDetails"]),ctx,{"block":body_1},null).exists(ctx._get(false,["assets","images"]),ctx,{"block":body_3},null).exists(ctx._get(false,["assets","links"]),ctx,{"block":body_5},null).write("</dl></article>");}function body_1(chk,ctx){return chk.write("<dt>").reference(ctx._get(false, ["uIotherDetails"]),ctx,"h").write(":</dt><dd><ol>").section(ctx._get(false,["extendedInfo","otherDetails"]),ctx,{"block":body_2},null).write("</ol></dd>");}function body_2(chk,ctx){return chk.write("<li>").reference(ctx._get(true,[]),ctx,"h").write("</li>");}function body_3(chk,ctx){return chk.write("<dt>").reference(ctx._get(false, ["uIimages"]),ctx,"h").write(":</dt><dd><ul>").section(ctx._get(false,["assets","images"]),ctx,{"block":body_4},null).write("</ul></dd>");}function body_4(chk,ctx){return chk.write("<li><img src=\"").reference(ctx._get(true,["url"]),ctx,"h").write("\" alt=\"").reference(ctx._get(true,["title"]),ctx,"h").write("\"/></li>");}function body_5(chk,ctx){return chk.write("<dt>").reference(ctx._get(false, ["uIlinks"]),ctx,"h").write(":</dt><dd><ul>").section(ctx._get(false,["assets","links"]),ctx,{"block":body_6},null).write("</ul></dd>");}function body_6(chk,ctx){return chk.write("<li><a href=\"").reference(ctx._get(true,["url"]),ctx,"h").write("\" title=\"").reference(ctx._get(true,["title"]),ctx,"h").write("\">").reference(ctx._get(true,["title"]),ctx,"h").write("</a></li>");}return body_0;})();
//projects template
(function(){dust.register("cwsProjects",body_0);function body_0(chk,ctx){return chk.write("<article><h3>").reference(ctx.get(["projectName"], false),ctx,"h").write("</h3><dl><dt>").reference(ctx.get(["uIclient"], false),ctx,"h").write(":</dt><dd>").reference(ctx.get(["client"], false),ctx,"h").write("</dd><dt>").reference(ctx.get(["uIagency"], false),ctx,"h").write(":</dt><dd>").reference(ctx.get(["agency"], false),ctx,"h").write("</dd><dt>").reference(ctx.get(["uIprojectDescription"], false),ctx,"h").write(":</dt><dd>").reference(ctx.get(["projectDescription"], false),ctx,"h").write("</dd><dt>").reference(ctx.get(["uIworkUndertaken"], false),ctx,"h").write(":</dt><dd>").reference(ctx.getPath(false, ["extendedInfo","workUndertaken"]),ctx,"h",["s"]).write("</dd>").exists(ctx.getPath(false, ["extendedInfo","otherDetails"]),ctx,{"block":body_1},null).exists(ctx.getPath(false, ["assets","images"]),ctx,{"block":body_3},null).exists(ctx.getPath(false, ["assets","links"]),ctx,{"block":body_5},null).write("</dl></article>");}function body_1(chk,ctx){return chk.write("<dt>").reference(ctx.get(["uIotherDetails"], false),ctx,"h").write(":</dt><dd><ol>").section(ctx.getPath(false, ["extendedInfo","otherDetails"]),ctx,{"block":body_2},null).write("</ol></dd>");}function body_2(chk,ctx){return chk.write("<li>").reference(ctx.getPath(true, []),ctx,"h").write("</li>");}function body_3(chk,ctx){return chk.write("<dt>").reference(ctx.get(["uIimages"], false),ctx,"h").write(":</dt><dd><ul>").section(ctx.getPath(false, ["assets","images"]),ctx,{"block":body_4},null).write("</ul></dd>");}function body_4(chk,ctx){return chk.write("<li><img src=\"").reference(ctx.getPath(true, ["url"]),ctx,"h").write("\" alt=\"").reference(ctx.getPath(true, ["title"]),ctx,"h").write("\"/></li>");}function body_5(chk,ctx){return chk.write("<dt>").reference(ctx.get(["uIlinks"], false),ctx,"h").write(":</dt><dd><ul>").section(ctx.getPath(false, ["assets","links"]),ctx,{"block":body_6},null).write("</ul></dd>");}function body_6(chk,ctx){return chk.write("<li><a href=\"").reference(ctx.getPath(true, ["url"]),ctx,"h").write("\" title=\"").reference(ctx.getPath(true, ["title"]),ctx,"h").write("\">").reference(ctx.getPath(true, ["title"]),ctx,"h").write("</a></li>");}return body_0;})();

//ui template
//(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\"><span class=\"hide\">").reference(ctx.get(["uIhideIntro"], false),ctx,"h").write("</span></section>");}return body_0;})();
//(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\">").reference(ctx.getPath(false, ["generalIntro","introCopy"]),ctx,"h").write("<span class=\"hide\">").reference(ctx.getPath(false, ["i18n","uIhideIntro"]),ctx,"h").write("</span></section>");}return body_0;})();
//(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\">").reference(ctx.getPath(false, ["generalIntro","introCopy"]),ctx,"h").write("<span class=\"hide\">").reference(ctx.getPath(false, ["i18n","uIhideIntro"]),ctx,"h").write("</span></section><section id=\"controls\"><section id=\"setMultipleControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiItems"]),ctx,"h").write(":</h4><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></section><section id=\"setLangControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiLang"]),ctx,"h").write(":</h4><ul><li id=\"en\">").reference(ctx.getPath(false, ["i18n","localeNames","uIen"]),ctx,"h").write("</li><li id=\"fr\">").reference(ctx.getPath(false, ["i18n","localeNames","uIfr"]),ctx,"h").write("</li></ul></section><section id=\"toggleIntro\">").reference(ctx.getPath(false, ["i18n","uIShowIntro"]),ctx,"h").write("</section></section>");}return body_0;})();
//(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\">").reference(ctx.getPath(false, ["generalIntro","introCopy"]),ctx,"h").write("<span class=\"hide\">").reference(ctx.getPath(false, ["i18n","uIhideIntro"]),ctx,"h").write("</span></section><section id=\"controls\"><section id=\"setMultipleControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiItems"]),ctx,"h").write(":</h4><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></section><section id=\"setLangControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiLang"]),ctx,"h").write(":</h4><ul><li id=\"en\">").reference(ctx.getPath(false, ["i18n","localeNames","uIen"]),ctx,"h").write("</li><li id=\"fr\">").reference(ctx.getPath(false, ["i18n","localeNames","uIfr"]),ctx,"h").write("</li></ul></section><section id=\"toggleIntro\">").reference(ctx.getPath(false, ["i18n","uIShowIntro"]),ctx,"h").write("</section></section><a href=\"#\" class=\"cwsCprev\" title=\"").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("</a> <a href=\"#\" class=\"cwsCnext\" title=\"").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("</a><div class=\"carousel\"></div>");}return body_0;})();
//(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\">").reference(ctx.getPath(false, ["generalIntro","introCopy"]),ctx,"h",["s"]).write("<span class=\"hide\">").reference(ctx.getPath(false, ["i18n","uIhideIntro"]),ctx,"h").write("</span></section><section id=\"controls\"><section id=\"setMultipleControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiItems"]),ctx,"h").write(":</h4><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></section><section id=\"setLangControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiLang"]),ctx,"h").write(":</h4><ul><li id=\"en\">").reference(ctx.getPath(false, ["i18n","localeNames","uIen"]),ctx,"h").write("</li><li id=\"fr\">").reference(ctx.getPath(false, ["i18n","localeNames","uIfr"]),ctx,"h").write("</li></ul></section><section id=\"toggleIntro\">").reference(ctx.getPath(false, ["i18n","uIShowIntro"]),ctx,"h").write("</section></section><a href=\"#\" class=\"cwsCprev\" title=\"").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("</a> <a href=\"#\" class=\"cwsCnext\" title=\"").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("</a><div class=\"carousel\"></div>");}return body_0;})();
(function(){dust.register("cwsUI",body_0);function body_0(chk,ctx){return chk.write("<section id=\"intro\" class=\"hidden\">").reference(ctx.getPath(false, ["generalIntro","introCopy"]),ctx,"h",["s"]).write("<span class=\"hide\">").reference(ctx.getPath(false, ["i18n","uIhideIntro"]),ctx,"h").write("</span></section><section id=\"controls\"><section id=\"setMultipleControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiItems"]),ctx,"h").write(":</h4><ul><li>1</li><li>2</li><li>3</li><li>4</li></ul></section><section id=\"setLangControl\"><h4>").reference(ctx.getPath(false, ["i18n","uImultiLang"]),ctx,"h").write(":</h4><ul><li id=\"en\">").reference(ctx.getPath(false, ["i18n","localeNames","uIen"]),ctx,"h").write("</li><li id=\"fr\">").reference(ctx.getPath(false, ["i18n","localeNames","uIfr"]),ctx,"h").write("</li></ul></section><section id=\"toggleIntro\">").reference(ctx.getPath(false, ["i18n","uIShowIntro"]),ctx,"h").write("</section></section><a href=\"#\" class=\"cwsCprev\" title=\"").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uIprevious"]),ctx,"h").write("</a> <a href=\"#\" class=\"cwsCnext\" title=\"").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("\">").reference(ctx.getPath(false, ["i18n","uInext"]),ctx,"h").write("</a><div class=\"carousel\"></div>");}return body_0;})();