var hotel = {
    name: "Vacation",
    rating: 5.0,
    roomsBookedCount: 0,
    roomNumbersBooked: [],
    //totalRooms: 8,
    roomRate: 35.00,
    roomType: "Twin",
    roomNums: ["101","102","103","104","105", "106","107","108"],
    totalRooms: function() {
        return this.roomNums.length;
    },
    
    roomsAvailable: function() {
        //total rooms minus rooms booked
        return this.totalRooms() - this.roomsBookedCount;
    },
    
    bookRoom: function() {
        //see if a room is available
        //roomNumbersBooked = roomNums shift(removes the 1st element in an array)
        this.roomNumbersBooked.unshift(this.roomNums.shift(0,2));
        return this.roomNums;

    }
};

console.log(hotel.totalRooms());
console.log(hotel.roomsAvailable());
console.log(hotel.bookRoom());
console.log(hotel.roomNumbersBooked);