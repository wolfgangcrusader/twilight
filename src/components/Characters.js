import React from "react";
import CharacterCard from "./CharacterCard";
import "./Characters.css";

const Characters = () => {
    const characters = [
        {
          title: "Bella Swan",
          image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
          description: "Bella is literally us when we move to a new school and fall for the mysterious bad boy, except her boy is a 100-year-old vampire. #Relatable",
          details: "Girl navigates through high school drama, but make it supernatural. Becomes a vampire because why not? Sparkly boyfriend goals.",
        },
        {
          title: "Edward Cullen",
          image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
          description: "Edward, aka Mr. Sparkle, is every emo boy from the 2000s but make him a vampire. Can't read Bella's mind, which is like, so convenient.",
          details: "Struggles with being a vamp in love with a human. It's complicated, but honestly, #CoupleGoals. Also, plays the piano because of course he does.",
        },
        {
          title: "Jacob Black",
          image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
          description: "Jacob, the ultimate friendzoned king. Turns into a giant wolf, which is kinda the vibe. Major third-wheel vibes.",
          details: "He's all about that protect and serve, especially when it comes to Bella. Ends up having a weird af connection with her daughter... Nessy. It's a whole thing.",
        },
        {
            title: "Alice Cullen",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Alice is your go-to future-telling shopaholic BFF. She’s the pixie vibe queen with a love for fashion and spontaneous road trips. #SquadGoals",
            details: "Literally knows what you’re going to do before you do it, which is both cool and kinda creepy. Adopted sis to Edward and the ultimate party planner.",
          },
          {
            title: "Jasper Hale",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Jasper, the moody blonde with a Civil War backstory and the power to mess with your feels. Always looks like he’s fighting the urge to snack on you.",
            details: "Struggles more than the rest with the whole 'don't eat humans' thing. Low-key a softie, especially when it comes to Alice. #MoodSwings",
          },
          {
            title: "Rosalie Hale",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Rosalie is the ultimate ice queen with a heart of gold, kinda. Fiercely protective and has the best hair flip in the game.",
            details: "Not Bella’s number one fan at first because let’s face it, immortality is complicated. But she comes around, proving family is everything.",
          },
          {
            title: "Emmett Cullen",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Emmett, the bear-hugging, weight-lifting jokester of the Cullen fam. Has the brawn and the brain, making him the ultimate big bro.",
            details: "Loves a good arm-wrestle and is always down for a laugh, even if it means being the butt of the joke. Rosalie’s other half and a total softie at heart.",
          },
          {
            title: "Carlisle Cullen",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Carlisle, aka Dr. Vampire McDreamy, is highkey daddy af. Hundreds of years old but still aging like fine wine. yummmmmmm",
            details: "Started the whole 'vegetarian vampire' trend. Super chill and wise, basically the Cullen clan's moral compass. Has a thing for saving lives and family dinners.",
          },
          {
            title: "Esme Cullen",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Esme is the heart and soul of the Cullen fam. Ultimate mom goals with her loving, nurturing vibe. Will adopt you into her heart in a heartbeat.",
            details: "Has the whole 'kind-hearted' aesthetic down. Loves her vampire fam fiercely and is always there to patch up the drama with a warm smile and open arms.",
          },
          {
            title: "Robitussin Cullen",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Rasputin, the half-vampire, half-human miracle baby that broke the internet. Super cute but can show you her memories by touching your face, so, privacy?",
            details: "Grows up at the speed of light and is basically the reason for the whole 'imprinting' drama. Jacob's bestie for life and the new face of supernatural Gen Z.",
          },
          {
            title: "Charlie Swan",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Charlie, the mustache-donning, fishing-loving dad who’s all about that small-town sheriff life. Awkward dad vibes turned up to 100.",
            details: "He's basically the king of not getting what's going on but still tries to be the best dad. His relationship with Bella is a mood: caring but clueless.",
          },
          {
            title: "Renee Dwyer",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Renee is the free-spirited mom who’s more like your quirky friend than a parent. Artsy and spontaneous, she’s all about living in the moment.",
            details: "Moves to Florida with her new husband, leaving Bella to navigate Forks' drama. She’s supportive in a 'I’m here for a good time, not a long time' kind of way.",
          },
          {
            title: "Jessica Stanley",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Jessica, the gossip queen of Forks High. Always up for a mall trip and a little high school tea spill. #SocialButterfly",
            details: "She's all about the drama and being in the know. Friends with Bella, but sometimes you wonder if it's just for the clout. Typical high school friend vibes.",
          },
          {
            title: "Mike Newton",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Mike, the golden retriever of Bella’s friend group. Super friendly and a tad too eager, especially when it comes to Bella. #TeamMike",
            details: "Works at his family's outdoor store and definitely has a crush on Bella. Tries to be the cool guy but is more of the adorable puppy everyone loves.",
          },
          {
            title: "Angela Weber",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Angela, the actual bestie goals. Quiet, kind, and the one friend who actually listens. The unsung hero of Bella’s human friends.",
            details: "She’s the friend you go to when you need a break from all the supernatural drama. Down-to-earth and genuinely cares about Bella’s well-being.",
          },
          {
            title: "Eric Yorkie",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Eric, the class nerd turned friend. Tries a little too hard to be cool, but his heart’s in the right place. #AwkwardButLovable",
            details: "He’s one of the first to welcome Bella to Forks High and always down for a group hang. Has his moments of unintentional comedy that lighten up the day.",
          },
          {
            title: "Sam Uley",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Sam, the alpha of the wolf pack. Serious leader vibes but also a big softie when it comes to his pack. #WolfDad",
            details: "First of the pack to phase and takes the whole 'protector of the tribe' thing to heart. Has a complicated love life that could rival any soap opera.",
          },
          {
            title: "Leah Clearwater",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Leah, the only girl in the wolf gang, serving major 'don’t mess with me' energy. She’s got sass and isn’t afraid to show it. #GirlBoss",
            details: "Struggles with being the ex of the alpha and the whole werewolf drama. Has a heart of gold, though, and fiercely independent.",
          },
          {
            title: "Seth Clearwater",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Seth, the happiest werewolf you’ll ever meet. Always has a smile on his face and is basically everyone’s little brother. #SunshinePup",
            details: "Loyal to a fault and super friendly, even to vampires. Forms an unlikely friendship with Edward, proving that not all vampires and werewolves have to be enemies.",
          },
          {
            title: "Paul Lahote",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Paul, the hothead of the pack who’s always ready to turn into a wolf at the drop of a hat. #AngryPuppy",
            details: "Known for his quick temper but is really just passionate about protecting his tribe. His phasing often leads to some comedic, shirt-ripping moments.",
          },
          {
            title: "Aro Volturi",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Aro, the ultimate goth dad of the vampire world. Loves to collect powerful vampires like they’re Pokémon. #VampireCollector",
            details: "Can read every thought you’ve ever had with a single touch, which is basically the worst superpower at a party. Obsessed with Edward and Bella’s drama.",
          },
          {
            title: "Caius Volturi",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Caius, the one with a permanent grudge against everything. Probably never smiles and definitely doesn’t have a joke book. #EternalScowl",
            details: "He’s got zero chill, especially when it comes to werewolves and vampires breaking the rules. Basically, the fun police of the vampire world.",
          },
          {
            title: "Marcus Volturi",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Marcus, the emo one who’s been over it for centuries. Has the ability to see relationships, which makes him the ultimate third wheel. #Mood",
            details: "Perpetually bored and unimpressed, probably wondering why he’s still hanging out with Aro and Caius after all these years.",
          },
          {
            title: "Jane Volturi",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Jane, the tiny terror with a doll face and the power to make you feel like you’re being stabbed. #PintSizedPain",
            details: "Loves her job a little too much. Has a creepy twin brother and enjoys using her powers a bit too eagerly. Faces off with Bella and loses, which is pretty embarrassing.",
          },
          {
            title: "Alec Volturi",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Alec, the other half of the creepy twin duo. Can numb all your senses, making him the ultimate party pooper. #MisterNoFun",
            details: "Equally as unsettling as his sister but in a quieter, ‘I’ll make you blind, deaf, and dumb’ kind of way. Definitely not the life of the party.",
          },
          {
            title: "Garrett",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Garrett, the adventurous nomad with a heart of gold and a taste for rebellion. #WanderlustVampire",
            details: "Loves a good fight for the right cause and ends up falling for one of the Denali sisters. Basically, the Indiana Jones of vampires.",
          },
          {
            title: "Kate Denali",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Kate, with her shocking personality (literally), can electrocute you with a touch. #ElectricLady",
            details: "Part of the Alaskan vampire coven and ends up catching Garrett's eye. Teaches Bella how to use her shield because girl power.",
          },
          {
            title: "Tanya Denali",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Tanya, the leader of the Denali coven, known for her strawberry blonde hair and being Edward’s first crush. #TeamTanya",
            details: "She’s got that 'cool older sister' vibe and is super supportive during the whole Volturi showdown.",
          },
          {
            title: "Benjamin",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Benjamin, the avatar of the vampire world. Can control the elements, which is as cool as it sounds. #Elemental",
            details: "His powers are unique in the vampire world, making him a key player in the face-off with the Volturi. Plus, he’s just all-around awesome.",
          },
          {
            title: "Zafrina",
            image: "https://via.placeholder.com/200x200.png", // Replace with actual image URL
            description: "Zafrina, from the Amazon coven, has the power to make you see whatever she wants. #MindMovies",
            details: "Her illusions can be both beautiful and terrifying, which is super handy in a fight. Becomes good friends with Renesmee, showing her the wonders of the mind.",
          },
      ];
      
      
  return (
    <>
    <div className="characters-hero">
      <h1>Characters</h1>
    </div>
    <div className="char-gallery"> 
          {characters.map((character, index) => (
            <CharacterCard key={index} {...character} />
          ))}
    </div>
    </>
  );
};

export default Characters;