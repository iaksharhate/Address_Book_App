// UC : 8

const createAndUpdateStorage = (contact) => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if (contactList != undefined) {
    contactList.push(contact);
    } else {
    contactList = [contact];
    }
alert(contact.toString());
    alert("Contact Added Sucessfully");
    console.log(contactList);
    localStorage.setItem("ContactList", JSON.stringify(contactList));
}