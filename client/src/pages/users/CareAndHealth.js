import React from 'react';
import Navbar from '../../components/Navbar';
import CareInfo from '../../components/CareInfo';
import "../../css/careandhealth.css";

class CareAndHealth extends React.Component {

  render() {
    const careInfo = [
        {
            "heading" : "Nutrition Care",
            "paragraphs" : [
              "A crucial component of providing for your pet friend is nutrition. An immune system that is strong, a healthy weight, and the avoidance of health issues are all benefits of proper nourishment for your dog. The following are crucial dog nutrition care guidelines that every new pet owner should be aware of:",
              "Choosing quality foods : The best dog food to choose is one that is high in protein and low in carbs. Avoid foods that contain fillers, artificial colors, or preservatives by carefully reading the ingredient list.",
              "Attention to serving size: Be mindful of serving sizes because over feeding your dog can cause obesity and other health issues. Be sure to feed your dog the recommended amount of food for their size, age, and level of activity.",
              "Avoid Giving Human Food : While it may seem alluring to feed your pet what you eat, many human foods can be poisonous to dogs. Be sure to only give your dog treats and high-quality dog food that are designed just for canines.",
              "Pay Attention to Allergies : Just like people, dogs can experience food allergies. See your veterinarian about the likelihood of a food allergy if you find your dog scratching or having digestive issues.",
              "Consider supplements: Some dogs might gain from taking probiotics or joint supplements, for example. See your veterinarian to find out if vitamins are a good idea for your dog.",
              "Give plenty of water : Ensure that your dog has constant access to clean, fresh water. Keep their water bowl stocked with fresh water.",
                ]
        },
        {
            "heading" : "Basic Care",
            "paragraphs" : [
              "Caring for a dog involves more than just feeding and sheltering them. It also requires providing basic care to ensure their health, safety, and well-being. Here are some essential tips for basic dog care:",
              "Provide Adequate Shelter -Dogs need a safe and comfortable place to sleep and rest. Make sure your dog has a warm, dry, and cozy place to sleep, whether it's a crate, dog bed, or your own bed.",
              "Grooming - Grooming is an essential aspect of dog care. Brush your dog's coat regularly, trim their nails when needed, and clean their ears and teeth to prevent infections.",
              "Proper Hygiene - Keep your dog clean and hygienic by bathing them regularly and providing flea and tick prevention. Clean up after your dog and dispose of waste properly.",
              "Socialization - Socialization is essential for your dog's mental health and well-being. Make sure your dog has plenty of opportunities to interact with other dogs and people.",
              "Watch for Signs of Illness - Pay attention to any changes in your dog's behavior, appetite, or energy level. If you notice any signs of illness, consult with your veterinarian right away.",
              "Consider Spaying or Neutering - Spaying or neutering your dog can help prevent health problems and reduce the risk of unwanted litters.",
            ]
        },
        {
          "heading" : "Safety Tips",
          "paragraphs" : [
            "Dog safety care is essential for every new pet owner and involves maintaining the well-being of your furry friend. Here are some vital dog safety care suggestion:  ",
            "Provide Proper Identification - A dog should always wear a collar with up-to-date identification tags containing your contact information. Consider getting your pet microchipped as an added layer of security. In the event that your pet becomes lost, proper identification will increase the chances of being reunited.",
            "Keep Them on a Leash - Always keep your dog on a leash when outside the home, especially in unfamiliar areas. This will prevent them from running into traffic, getting into fights with other dogs, or getting lost.",
            "Regular Vet Check-Ups - Regular veterinary check-ups are essential to ensuring your dog's health and well-being. Stay up-to-date on vaccinations, and make sure your dog is on a regular parasite prevention regimen.",
          ]
      },
      
    ];
    return (

      <div className="App">
        <Navbar/>
        <br/>
        {careInfo.map(e => {
            return <CareInfo config={e}/>
        })}
        {}
      </div>
    );
  }
}

export default CareAndHealth;
