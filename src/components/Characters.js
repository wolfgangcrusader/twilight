import React from "react";
import CharacterCard from "./CharacterCard";
import "./Characters.css";

const Characters = () => {
    const characters = [
        {
          title: "Bella Swan",
          image: "https://i.redd.it/twilight-bella-swan-natural-tone-v0-t71usax230tb1.jpg?width=934&format=pjpg&auto=webp&s=a6e77bd7aef27cb3d8b91c104d88173a819aaec5", // Replace with actual image URL
          description: "Bella is literally us when we move to a new school and fall for the mysterious bad boy, except her boy is a 100-year-old vampire. #Relatable",
          details: "Girl navigates through high school drama, but make it supernatural. Becomes a vampire because why not? Sparkly boyfriend goals.",
        },
        {
          title: "Edward Cullen",
          image: "https://i.pinimg.com/originals/29/62/4d/29624da5df1bb52710867e4912a5f494.jpg", // Replace with actual image URL
          description: "Edward, aka Mr. Sparkle, is every emo boy from the 2000s but make him a vampire. Can't read Bella's mind, which is like, so convenient.",
          details: "Struggles with being a vamp in love with a human. It's complicated, but honestly, #CoupleGoals. Also, plays the piano because of course he does.",
        },
        {
          title: "Jacob Black",
          image: "https://w0.peakpx.com/wallpaper/569/572/HD-wallpaper-abduction-eclipse-jacob-black-taylor-lautner-twilight-thumbnail.jpg", // Replace with actual image URL
          description: "Jacob, the ultimate friendzoned king. Turns into a giant wolf, which is kinda the vibe. Major third-wheel vibes.",
          details: "He's all about that protect and serve, especially when it comes to Bella. Ends up having a weird af connection with her daughter... Nessy. It's a whole thing.",
        },
        {
            title: "Alice Cullen",
            image: "https://i1.sndcdn.com/artworks-qeEWpNNPSSWQWneb-zNuRBA-t500x500.jpg", // Replace with actual image URL
            description: "Alice is your go-to future-telling shopaholic BFF. She’s the pixie vibe queen with a love for fashion and spontaneous road trips. #SquadGoals",
            details: "Literally knows what you’re going to do before you do it, which is both cool and kinda creepy. Adopted sis to Edward and the ultimate party planner.",
          },
          {
            title: "Jasper Hale",
            image: "https://cdn.discordapp.com/attachments/1139537058646462515/1207623178298335282/image.png?ex=65e051ba&is=65cddcba&hm=bc9af5454ca24a4284e88ade39db4b579196008bb448cfad5c8f442158fa4213&", // Replace with actual image URL
            description: "Jasper, the moody blonde with a Civil War backstory and the power to mess with your feels. Always looks like he’s fighting the urge to snack on you.",
            details: "Struggles more than the rest with the whole 'don't eat humans' thing. Low-key a softie, especially when it comes to Alice. #MoodSwings",
          },
          {
            title: "Rosalie Hale",
            image: "https://pm1.aminoapps.com/6403/22056b365697c95d5248aa66ad24b2a571219329_hq.jpg", // Replace with actual image URL
            description: "Rosalie is the ultimate ice queen with a heart of gold, kinda. Fiercely protective and has the best hair flip in the game.",
            details: "Not Bella’s number one fan at first because let’s face it, immortality is complicated. But she comes around, proving family is everything.",
          },
          {
            title: "Emmett Cullen",
            image: "https://i.pinimg.com/474x/db/e3/75/dbe375ce27b010becb333703081ff560.jpg", // Replace with actual image URL
            description: "Emmett, the bear-hugging, weight-lifting jokester of the Cullen fam. Has the brawn and the brain, making him the ultimate big bro.",
            details: "Loves a good arm-wrestle and is always down for a laugh, even if it means being the butt of the joke. Rosalie’s other half and a total softie at heart.",
          },
          {
            title: "Carlisle Cullen",
            image: "https://imageio.forbes.com/images-forbes/media/2010/04/12/0412_carlisle-cullen_280x340.jpg?height=340&width=280&fit=bounds", // Replace with actual image URL
            description: "Carlisle, aka Dr. Vampire McDreamy, is highkey daddy af. Hundreds of years old but still aging like fine wine. yummmmmmm",
            details: "Started the whole 'vegetarian vampire' trend. Super chill and wise, basically the Cullen clan's moral compass. Has a thing for saving lives and family dinners.",
          },
          {
            title: "Esme Cullen",
            image: "https://openpsychometrics.org/tests/characters/test-resources/pics/T/6.jpg", // Replace with actual image URL
            description: "Esme is the heart and soul of the Cullen fam. Ultimate mom goals with her loving, nurturing vibe. Will adopt you into her heart in a heartbeat.",
            details: "Has the whole 'kind-hearted' aesthetic down. Loves her vampire fam fiercely and is always there to patch up the drama with a warm smile and open arms.",
          },
          {
            title: "Robitussin Cullen",
            image: "https://entertainment.time.com/wp-content/uploads/sites/3/2013/11/twilight-animatronic-baby.png?w=522", // Replace with actual image URL
            description: "Rasputin, the half-vampire, half-human miracle baby that broke the internet. Super cute but can show you her memories by touching your face, so, privacy?",
            details: "Grows up at the speed of light and is basically the reason for the whole 'imprinting' drama. Jacob's bestie for life and the new face of supernatural Gen Z.",
          },
          {
            title: "Charlie Swan",
            image: "https://i.pinimg.com/736x/82/53/13/8253131b0a872958ecc59991dd6360b8.jpg", // Replace with actual image URL
            description: "Charlie, the mustache-donning, fishing-loving dad who’s all about that small-town sheriff life. Awkward dad vibes turned up to 100.",
            details: "He's basically the king of not getting what's going on but still tries to be the best dad. His relationship with Bella is a mood: caring but clueless.",
          },
          {
            title: "Renee Dwyer",
            image: "https://64.media.tumblr.com/396e39a5afb06f2cca4ba71fe778530d/tumblr_prvzbcJrF21svhsq4_1280.jpg", // Replace with actual image URL
            description: "Renee is the free-spirited mom who’s more like your quirky friend than a parent. I can't lie, I am a Renee hater, she's a trash mum.",
            details: "Moves to Florida with her new husband, leaving Bella to navigate Forks' drama. She’s supportive in a 'I’m here for a good time, not a long time' kind of way.",
          },
          {
            title: "Jessica Stanley",
            image: "https://pm1.aminoapps.com/6555/d73d11521e231bec5da2a671f80dcc5a196efe32_00.jpg", // Replace with actual image URL
            description: "Jessica, the gossip queen of Forks High. Always up for a mall trip and a little high school tea spill. #SocialButterfly",
            details: "She's all about the drama and being in the know. Friends with Bella, but sometimes you wonder if it's just for the clout. Typical high school friend vibes.",
          },
          {
            title: "Mike Newton",
            image: "https://pbs.twimg.com/media/EzWZRP7VcAUBglz.jpg", // Replace with actual image URL
            description: "Mike, the golden retriever of Bella’s friend group. Super friendly and a tad too eager, especially when it comes to Bella. #TeamMike",
            details: "Works at his family's outdoor store and definitely has a crush on Bella. Tries to be the cool guy but is more of the adorable puppy everyone loves.",
          },
          {
            title: "Angela Weber",
            image: "https://i2-prod.ok.co.uk/incoming/article14480111.ece/ALTERNATES/s615b/932977_Screen_Shot_2016_11_22_at_14_d265e9ef14149bc125cbdcdf7dc9f720", // Replace with actual image URL
            description: "Angela, the actual bestie goals. Quiet, kind, and the one friend who actually listens. The unsung hero of Bella’s human friends.",
            details: "She’s the friend you go to when you need a break from all the supernatural drama. Down-to-earth and genuinely cares about Bella’s well-being.",
          },
          {
            title: "Eric Yorkie",
            image: "https://i.pinimg.com/originals/b0/35/86/b035861bb0a2c8dffa34772eeddc7780.jpg", // Replace with actual image URL
            description: "Eric, the class nerd turned friend. Tries a little too hard to be cool, but his heart’s in the right place. #AwkwardButLovable",
            details: "He’s one of the first to welcome Bella to Forks High and always down for a group hang. Has his moments of unintentional comedy that lighten up the day.",
          },
          {
            title: "Sam Uley",
            image: "https://101570305.weebly.com/uploads/1/5/7/5/15755230/1608404.jpg?353", // Replace with actual image URL
            description: "Sam, the alpha of the wolf pack. Serious leader vibes but also a big softie when it comes to his pack. #WolfDad",
            details: "First of the pack to phase and takes the whole 'protector of the tribe' thing to heart. Has a complicated love life that could rival any soap opera.",
          },
          {
            title: "Leah Clearwater",
            image: "https://pm1.aminoapps.com/7651/fd5b79eb4895dc9681285c0f45c343f02b1abe3br1-640-960v2_hq.jpg", // Replace with actual image URL
            description: "Leah, the only girl in the wolf gang, serving major 'don’t mess with me' energy. She’s got sass and isn’t afraid to show it. #GirlBoss",
            details: "Struggles with being the ex of the alpha and the whole werewolf drama. Has a heart of gold, though, and fiercely independent.",
          },
          {
            title: "Seth Clearwater",
            image: "https://pm1.aminoapps.com/6528/db94bc0a15b3fd8e03dcb62de690914270b42e6d_hq.jpg", // Replace with actual image URL
            description: "Seth, the happiest werewolf you’ll ever meet. Always has a smile on his face and is basically everyone’s little brother. #SunshinePup",
            details: "Loyal to a fault and super friendly, even to vampires. Forms an unlikely friendship with Edward, proving that not all vampires and werewolves have to be enemies.",
          },
          {
            title: "Paul Lahote",
            image: "https://i.pinimg.com/236x/40/05/65/400565b8311c0d20ac65dafa731869e3.jpg", // Replace with actual image URL
            description: "Paul, the hothead of the pack who’s always ready to turn into a wolf at the drop of a hat. #AngryPuppy",
            details: "Known for his quick temper but is really just passionate about protecting his tribe. His phasing often leads to some comedic, shirt-ripping moments.",
          },
          {
            title: "Aro Volturi",
            image: "https://img.wattpad.com/cover/1441999-256-k547324.jpg", // Replace with actual image URL
            description: "Aro, the ultimate goth dad of the vampire world. Loves to collect powerful vampires like they’re Pokémon. #VampireCollector",
            details: "Can read every thought you’ve ever had with a single touch, which is basically the worst superpower at a party. Obsessed with Edward and Bella’s drama.",
          },
          {
            title: "Caius Volturi",
            image: "https://i.pinimg.com/736x/09/a2/1e/09a21e499de3f98498130fd70c8d7ee3.jpg", // Replace with actual image URL
            description: "Caius, the one with a permanent grudge against everything. Probably never smiles and definitely doesn’t have a joke book. #EternalScowl",
            details: "He’s got zero chill, especially when it comes to werewolves and vampires breaking the rules. Basically, the fun police of the vampire world.",
          },
          {
            title: "Marcus Volturi",
            image: "https://twilightreality.weebly.com/uploads/3/4/3/9/3439501/7755858.jpg?196", // Replace with actual image URL
            description: "Marcus, the emo one who’s been over it for centuries. Has the ability to see relationships, which makes him the ultimate third wheel. #Mood",
            details: "Perpetually bored and unimpressed, probably wondering why he’s still hanging out with Aro and Caius after all these years.",
          },
          {
            title: "Jane Volturi",
            image: "https://pbs.twimg.com/profile_images/1284860260814147584/X7AC-E1A_400x400.jpg", // Replace with actual image URL
            description: "Jane, the tiny terror with a doll face and the power to make you feel like you’re being stabbed. #PintSizedPain",
            details: "Loves her job a little too much. Has a creepy twin brother and enjoys using her powers a bit too eagerly. Faces off with Bella and loses, which is pretty embarrassing.",
          },
          {
            title: "Alec Volturi",
            image: "https://pm1.aminoapps.com/7013/de78437253d9747fb65ee56c71f42f1763564c2cr1-508-709v2_00.jpg", // Replace with actual image URL
            description: "Alec, the other half of the creepy twin duo. Can numb all your senses, making him the ultimate party pooper. #MisterNoFun",
            details: "Equally as unsettling as his sister but in a quieter, ‘I’ll make you blind, deaf, and dumb’ kind of way. Definitely not the life of the party.",
          },
          {
            title: "Garrett",
            image: "https://img.wattpad.com/cover/302068730-256-k146691.jpg", // Replace with actual image URL
            description: "Garrett, the adventurous nomad with a heart of gold and a taste for rebellion. #WanderlustVampire",
            details: "Loves a good fight for the right cause and ends up falling for one of the Denali sisters. Basically, the Indiana Jones of vampires.",
          },
          {
            title: "Kate Denali",
            image: "https://i.pinimg.com/474x/38/43/3c/38433c6f0b0984d39fdf1c7e69350433.jpg", // Replace with actual image URL
            description: "Kate, with her shocking personality (literally), can electrocute you with a touch. #ElectricLady",
            details: "Part of the Alaskan vampire coven and ends up catching Garrett's eye. Teaches Bella how to use her shield because girl power.",
          },
          {
            title: "Tanya Denali",
            image: "https://64.media.tumblr.com/ace23e0d7f68e6cd22ee2b9f295c421a/6ade3f7fac8dbc87-55/s540x810/bce1d64f1c633e109aa38c1b99df8e6cea7ffff5.jpg", // Replace with actual image URL
            description: "Tanya, the leader of the Denali coven, known for her strawberry blonde hair and being Edward’s first crush. #TeamTanya",
            details: "She’s got that 'cool older sister' vibe and is super supportive during the whole Volturi showdown.",
          },
          {
            title: "Benjamin",
            image: "https://i.pinimg.com/originals/b9/18/4b/b9184b9ec78dbcb96450b21d7cfcd41d.jpg", // Replace with actual image URL
            description: "Benjamin, the avatar of the vampire world. Can control the elements, which is as cool as it sounds. #Elemental",
            details: "His powers are unique in the vampire world, making him a key player in the face-off with the Volturi. Plus, he’s lowkey one of my favs.",
          },
      ];
      
      
  return (
    <>
    <div className="characters-hero">
      <h1>Characters</h1>
    </div>
    <h3 className="click">Click each profile to see more details</h3>
    <div className="char-gallery"> 
          {characters.map((character, index) => (
            <CharacterCard key={index} {...character} />
          ))}
    </div>
    </>
  );
};

export default Characters;