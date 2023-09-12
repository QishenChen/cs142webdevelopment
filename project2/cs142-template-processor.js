"use strict"
function Cs142TemplateProcessor (template){
    this.template=template;
}
Cs142TemplateProcessor.prototype.fillIn=function(dictionary){
    let matchdic=this.template.match(/\{\{(\w|\d)*\}\}/g);
    for(const ele of matchdic){
        let substr=ele.substring(2,ele.length-2);
        if(dictionary[substr]!=undefined) {
        this.template=this.template.replace(ele,dictionary[substr]);
        }
        else
            this.template=this.template.replace(ele,"");
    }
    return this.template;
}
