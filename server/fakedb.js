const Place = require('./models/place');


class FakeDb{

constructor(){


    this.places =[


        {
            name:'Dudhsagar Falls',
            city: 'Kulem',
            location: '8877+QP Sonaulim, Goa',
            street: 'Sonaulim',
            category:'waterfall',
            image: 'https://s3-ap-northeast-1.amazonaws.com/places-lohit-pub/1.jpg',
            description:'Dudhsagar Falls (literally Sea of Milk ) is a four-tiered waterfall located on the Mandovi River in the Indian state of Goa. It is 60 km from Panaji by road and is located on the Madgaon-Belagavi rail route about 46 km east of Madgaon and 80 km south of Belagavi. Dudhsagar Falls is amongst India\'s tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 metres (100 feet). The falls is located in the Bhagwan Mahaveer Sanctuary and Mollem National Park among the Western Ghats. The waterfall forms the border between Karnataka and Goa states. The area is surrounded by a deciduous forests with a rich biodiversity. The falls are not particularly spectacular during the dry season but during the monsoon season however, the falls are fed by rains and form a huge force of water.',

            createdAt: new Date().now

        }

,


        {
            name:'Fort Aguada',
            city: 'Candolim',
            location: 'FQRF+XG Candolim, Goa',
            street: 'asdas',
            category:'fort',
            image: 'https://s3-ap-northeast-1.amazonaws.com/places-lohit-pub/2.jpg',
            description:'Fort Aguada and its lighthouse is a well-preserved seventeenth-century Portuguese fort standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. The fort was constructed in 1612 to guard against the Dutch and the Marathas. It was a reference point for the vessels coming from Europe at that time. This old Portuguese fort stands on the beach south of Candolim, at the shore of the Mandovi River. It was initially tasked with defense of shipping and the nearby Bardez sub district. A freshwater spring within the fort provided water supply to the ships that used to stop by. This is how the fort got its name: Aguada, meaning Water. Crews of passing ships would often visit to replenish their fresh water stores. On the fort stands a four-storey Portuguese lighthouse, erected in 1864 and the oldest of its kind in Asia. Built in 1612, it was once the grandstand of 79 cannons. It has the capacity of storing 2,376,000 gallons of water, one of the biggest freshwater storages of the time in whole of Asia. This fort is divided in two segments: the upper part acted as fort and watering station, while the lower part served as a safe berth for Portuguese ships. Whereas the upper part has a moat, underground water storage chamber, gunpowder room, light house and bastions, it also has a secret escape passage to use during time of war and emergency. The lighthouse at initial stage is used to emit light once in 7 minutes. In 1834 it was changed to emit light creating eclipse every 30 seconds, however it was abandoned in 1976. Fort Aguada was the most prized and crucial fort of Portuguese. The fort is so large that it envelops the entire peninsula at the south western tip of Bardez. Built on the mouth of river Mandovi, it was strategically located and was the chief defence of Portuguese against the Dutch and Marathas.',
            createdAt: new Date().now

        },


        {
            name:'Our Lady of The Immaculate Conception Church',
            city: 'Panjim',
            location: 'FRXH+CR Panaji, Goa',
            street: 'asdasd',
            category:'churches',
            image: 'https://s3-ap-northeast-1.amazonaws.com/places-lohit-pub/3.jpg',




          description : 'The Our Lady of the Immaculate Conception Church (Nossa Senhora da Immaculada Conceição) is located in Panjim, Goa, India. The Church conducts mass every day in English, Konkani, and Portuguese.  The colonial Portuguese Baroque style church was first built in 1541 as a chapel on a hill side overlooking the city of Panjim. It was eventually replaced by a larger church in the 1600s as part of Portuguese Goa\'s religious expansion.[2][3] This church houses the ancient bell that was removed from the Augustinian ruins of the Church of Our Lady of Grace (Nossa Senhora da Graça) in the once famed city of Old Goa. This bell is considered to be the second largest of its kind in Goa, surpassed only by the Golden Bell which resides in the Sé Cathedral in Old Goa.'








           , createdAt: new Date().now
        }


    ];



}


async cleanDb(){

    await  Place.remove({});

}


pushPlacesToDb(){

    this.places.forEach((place)=>{

            const newPlace = new Place(place);
            newPlace.save();

    });
}


seedDb(){

    this.cleanDb();
    this.pushPlacesToDb();

}

}
module.exports=FakeDb;
