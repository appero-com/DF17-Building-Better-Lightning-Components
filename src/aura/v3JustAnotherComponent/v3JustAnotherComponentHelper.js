({
	getContactList: function(component, filterString) {
        //call aura method from service component:
        component.find("service").callApex(component, "c.getContactsByFilter", {"filter": filterString}, this.getContactListSuccess);
    },
    
    getContactListSuccess: function(component, returnValue) {
        //process result in some way
        component.set("v.contactList", returnValue);
    }
})