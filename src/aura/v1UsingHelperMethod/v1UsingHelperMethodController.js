({
	onSubmitButtonClick : function(component, event, helper) {
        var filterValue = component.find("filterInput").get("v.value");
		helper.getContactList(component, filterValue);
	}
})