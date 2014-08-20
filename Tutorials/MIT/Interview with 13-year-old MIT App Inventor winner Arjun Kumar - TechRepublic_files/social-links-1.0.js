define(["jquery","version!fly/utils/string-helper","version!fly/managers/debug","version!fly/components/loading","version!fly/components/social-links"],function(e,t,n){var r=n.init("socialLinks"),i=null,s=e.support.touch?"vclick":"click";e.widget("fly.socialLinks",e.fly.socialLinks,{options:{favApiUrl:"/xhr/favorite/",bitlyUrl:"/xhr/bitly/generate/",data:{id:"",type:""},loader:{disabled:!1,template:'<span class="{baseClass} {stateClass}"></span>',classes:{base:"loading-con"}}},_create:function(){var t=this.options,n=this,r={};this._setup(),r[s+" [data-"+this.popupId+"]"]="_handlePopup",r[s+" [data-"+this.linkId+"]"]="_handleLink",this._on(this.$element,r),this.$popUps=this.$element.find("[data-"+this.popupId+"]"),this.$links=this.$element.find("[data-"+this.linkId+"]"),this.$popUps.length>0&&this.$popUps.each(function(){var t=e(this),r=t.data(this.popupId);n._initItem(r.popup,t)}),this.$links.length>0&&this.$links.each(function(){var t=e(this),r=t.data(this.linkId);n._initItem(r.link,t)})},_handlePopup:function(t){var n=e(t.currentTarget),i=n.data(this.popupId),s=this,o=this.options;t.preventDefault(),i!="twitter"?(this.$el=n,this._setupClickEvent(t,{el:n,name:i}),this.popup(t,i)):this._generateBitlyUrl().always(function(e){e.success?o.shortUrl=e.url:r.log("Error generating Bltly url:",e),s.$el=n,s._setupClickEvent(t,{el:n,name:i}),s.popup(t,i)})},_handleLink:function(t){var n=e(t.currentTarget),r=n.data(this.linkId);t.preventDefault(),this.$el=n,this._setupClickEvent(t,{el:n,name:r}),this.link(t,r)},_initItem:function(n,i){var s=t.capitalize(n),o=this;e.isFunction(this["setup"+s])&&(r.log("Calling: setup"+s),this["setup"+s](i)),e.isFunction(this["get"+s])&&this.setLink(n,e.proxy(this["get"+s],o))},setupTrfavorite:function(t){var n=this.options,r=this;assetId=t.data("id"),assetType=t.data("type"),n.data.id=assetId,n.data.type=assetType,n.data.favApiUrl=n.favApiUrl,this.loader=e.fly.loading(n.loader),this.checkCookie(t)},getTrfavorite:function(t){var n=this.options,i=this;this.checkCookie(this.$el);if(!t.id)return!1;this.loader.$element.appendTo(this.$el),this.loader.add(),e.ajax({url:t.favApiUrl,type:"POST",dataType:"json",data:{assetId:t.id,assetType:t.type,isRemove:n.isRemove},success:function(e){i.loader.remove(),e.error||i.checkCookie(i.$el)},error:function(e){i.loader.remove(),r.log("Favorite ajax call failed",e)}})},checkCookie:function(t){var n=this.options;r.log("Checking Cookie"),favCookie=e.cookie("fly_tr_favorites"),favCookie?(favCookie=e.parseJSON(favCookie),favCookie!=null&&favCookie.hasOwnProperty(assetId)?(r.log("this asset is favorited"),n.isRemove=!0,t.html(t.html().replace("Save","Unsave")),t.addClass("saved")):(r.log("this asset is NOT favorited"),n.isRemove=!1,t.html(t.html().replace("Unsave","Save")),t.removeClass("saved"))):this.requestCookie(t)},requestCookie:function(t){var n=this.options,i=this;r.log("Requesting Cookie"),e.ajax({url:n.favApiUrl,type:"GET",dataType:"json",success:function(e){e.error||r.log("FAV cookie recieved")},error:function(e){r.log("Cookie request failed",e)}})},_generateBitlyUrl:function(){var t=this.options;return e.ajax({url:t.bitlyUrl,type:"POST",dataType:"json",data:{url:t.url}})}})})