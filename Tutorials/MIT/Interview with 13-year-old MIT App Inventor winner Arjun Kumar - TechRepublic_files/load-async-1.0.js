define(["jquery","version!fly/managers/debug","version!fly/components/base"],function(e,t){var n=t.get("loadAsync");e.widget("tr.loadAsync",e.fly.base,{options:{url:null,data:{},replace:!0},_create:function(){var e=this.options;this._setup(),this.id=this.$element.attr("id"),this.id||(this.id="uid-"+Math.floor(Math.random()*1e5),this.$element.attr("id",this.id)),n.log("_create: ","container",this.id),this._load()},_load:function(){var t=this.options,r=this;n.log("_load: ","loading",r.id,t.url,t.data),e.ajax({type:"GET",dataType:"json",url:t.url,data:t.data}).done(e.proxy(this._handleSuccess,this)).fail(e.proxy(this._handleFailure,this))},_handleSuccess:function(e){var t=this.options,r=this;n.log("_handleSuccess: ","response success?",e.success,r.id),e.success&&e.html?(t.replace?r.$element.replaceWith(e.html):r.$element.html(e.html),r._trigger("contentSet",null,{content:r.$element})):r._handleFailure(e)},_handleFailure:function(e){var t=this.options,r=this;n.log("_handleFailure: ","error message",e,r.id)}})})