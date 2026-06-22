import { LightningElement, track } from 'lwc';

export default class ZodiacSignMessenger extends LightningElement {

    @track userProfile={};
    zodiacTraits = [
    {
        sign: 'Capricorn',
        from: '12-22',
        to: '01-19',
        emoji: '🐐',
        trait: "You're disciplined, practical, and quietly ambitious. You don't just chase goals—you build them brick by brick. Success follows your patience and persistence."
    },
    {
        sign: 'Aquarius',
        from: '01-20',
        to: '02-18',
        emoji: '💧',
        trait: "You're a thinker, a dreamer, and often the most original person in the room. You love innovation, freedom, and making a difference in the world."
    },
    {
        sign: 'Pisces',
        from: '02-19',
        to: '03-20',
        emoji: '🐟',
        trait: "Your heart is full of compassion and imagination. You connect deeply with emotions and often see beauty where others miss it."
    },
    {
        sign: 'Aries',
        from: '03-21',
        to: '04-19',
        emoji: '🔥',
        trait: "You're bold, energetic, and fearless. Challenges excite you, and your determination inspires everyone around you."
    },
    {
        sign: 'Taurus',
        from: '04-20',
        to: '05-20',
        emoji: '🐂',
        trait: "You're reliable, patient, and grounded. You appreciate life's comforts and have the strength to achieve long-term success."
    },
    {
        sign: 'Gemini',
        from: '05-21',
        to: '06-20',
        emoji: '👯',
        trait: "You're curious, witty, and adaptable. Your ability to communicate and learn quickly makes you a fascinating person to be around."
    },
    {
        sign: 'Cancer',
        from: '06-21',
        to: '07-22',
        emoji: '🦀',
        trait: "You're caring, loyal, and deeply intuitive. Family and loved ones mean everything to you, and your kindness leaves a lasting impact."
    },
    {
        sign: 'Leo',
        from: '07-23',
        to: '08-22',
        emoji: '🦁',
        trait: "You're confident, charismatic, and born to shine. Your warmth and leadership naturally attract people toward you."
    },
    {
        sign: 'Virgo',
        from: '08-23',
        to: '09-22',
        emoji: '🌾',
        trait: "You're analytical, organized, and detail-oriented. Your practical wisdom helps solve problems that others struggle with."
    },
    {
        sign: 'Libra',
        from: '09-23',
        to: '10-22',
        emoji: '⚖️',
        trait: "You're charming, fair-minded, and diplomatic. You seek balance in life and have a natural talent for building harmony."
    },
    {
        sign: 'Scorpio',
        from: '10-23',
        to: '11-21',
        emoji: '🦂',
        trait: "You're passionate, determined, and mysterious. Your intensity and focus help you achieve things others think are impossible."
    },
    {
        sign: 'Sagittarius',
        from: '11-22',
        to: '12-21',
        emoji: '🏹',
        trait: "You're adventurous, optimistic, and always seeking new experiences. Your enthusiasm for life inspires everyone around you."
    }
];

    username;
    userdob;
    resultsRecieved = false;
    handleNameChange(event){
        this.username=event.target.value;
    }

    handleDateChange(event){
        this.userdob=event.target.value;
    }

    handleSubmit(){
        // console.log('Name is '+this.username);
        // console.log('DOB is '+this.userdob);

        let userdate=new Date(this.userdob);
        const usermonth = userdate.getMonth() + 1; //as getMonth() starts from 0
        const userday = userdate.getDate();
        this.userProfile = this.checkZodiacSign(usermonth,userday);


        
    }

    checkZodiacSign(month,day){
        for(let sign of this.zodiacTraits){
            // console.log('Sign recieved: '+sign);
            const [fromMonth, fromDay] = sign.from.split('-').map(Number);
            const [toMonth, toDay]= sign.to.split('-').map(Number);

            if((month === fromMonth && day>=fromDay) ||( month === toMonth && day<=toDay )){
                //console.log('Sign recieved: '+JSON.stringify(sign));
                this.resultsRecieved=true;
                return sign;
            }
        }
    }
    // name;
    // dob;
    // onclick:function(){
    //     I have to extract the month and day from dob and just go to check 
    //     the zodiac masterdata and return it.
    // }
}