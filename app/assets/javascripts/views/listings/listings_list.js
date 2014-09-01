AirNZG.Views.ListingsList = Backbone.View.extend({
	
	template: JST["listings/list"],
	
	initialize: function() {
		this.listenTo(this.collection, "sync", this.render);
	},
	
	tagName: "section",
	
	className: "listings-list group",
	
	render: function() {
		var content = this.template({ listings: this.collection });
		this.$el.html(content)
		
		return this;
	}
	
});