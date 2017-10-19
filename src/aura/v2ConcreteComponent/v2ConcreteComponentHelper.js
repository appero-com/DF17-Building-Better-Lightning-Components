({
	getContactList: function(component, filterString) {
        //call aura method from abstract base component:
        this.callApex(component, "c.getContactsByFilter", {"filter": filterString}, this.getContactListSuccess);
    },
    
    getContactListSuccess: function(component, returnValue) {
        //process result in some way
        component.set("v.contactList", returnValue);
    }
})