(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['problem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return " ("
    + container.escapeExpression(((helper = (helper = helpers.bonus || (depth0 != null ? depth0.bonus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"bonus","hash":{},"data":data}) : helper)))
    + ") ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <span class=\"\">\r\n                Risultato:\r\n                <div class=\"chip orange accent-3 white-text\">"
    + container.escapeExpression(((helper = (helper = helpers.resultType || (depth0 != null ? depth0.resultType : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"resultType","hash":{},"data":data}) : helper)))
    + "</div>\r\n            </span>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"chip blue white-text\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card hoverable\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n    <div class=\"card-content\">\r\n        <span class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bonus : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n        <p style=\"margin: 3em 0;\">\r\n            $$ "
    + alias4(((helper = (helper = helpers.contentLatex || (depth0 != null ? depth0.contentLatex : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contentLatex","hash":{},"data":data}) : helper)))
    + " $$\r\n        </p>\r\n        \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.resultType : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <span class=\"\">\r\n            Tags:\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </span>\r\n    </div>\r\n    <div class=\"card-action\">\r\n        <a class=\"--show-modal blue-text\" style=\"cursor: pointer;\">Mostra Risultato</a>\r\n        <a class=\"--share blue-text\"\r\n            data-clipboard-text=\"https://aziis98.github.io/math-problem-of-the-day/problem.html/#"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" \r\n            style=\"cursor: pointer;\">\r\n            Condividi\r\n        </a>\r\n    </div>\r\n</div>";
},"useData":true});
})();