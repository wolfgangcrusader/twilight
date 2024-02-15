import React from 'react';
import './Home.css';

const emails = [
    {
      id: 1,
      subject: 'Welcome to Forks High School, Annabelle!',
      sender: 'Forks High School Administration',
      date: 'Sep 1, 2024',
      content: `Dear Annabelle, <br><br>

      Welcome to Forks High School! We're excited to have you join our student body and hope you'll find your time here rewarding. Here's a quick overview of your first week:<br><br>
      
      - Monday: New Student Orientation in the gym at 9 AM.<br>
      - Tuesday: Pick up your class schedule from the main office.<br>
      - Wednesday: Join us for a welcome lunch in the cafeteria - meet fellow students and teachers.<br>
      - Thursday: Club Day! Explore and sign up for extracurricular activities in the gym.<br>
      - Friday: School spirit rally at the football field.<br><br>
      
      We're here to support you in this transition. If you have any questions, don't hesitate to reach out.`,
      signOff: 'Forks High School Administration',
    },
    {
      id: 2,
      subject: 'A Friendly Welcome from Your Classmate, Bella Swan',
      sender: 'Bella Swan',
      date: 'Sep 2, 2024',
      content: `Hi Annabelle, <br><br>
  
  I heard you're new to Forks High, and I just wanted to say welcome! Forks might be a bit different from what you're used to, but I hope you'll love it here as much as I have come to. If you ever need help finding your way around or have any questions about the school, feel free to ask me.
  
  Also, if you're interested, some of us are planning to hang out at the diner in town this Friday after the spirit rally. It would be great if you could join us!`,
      signOff: 'Looking forward to meeting you, Bella',
    },
    {
      id: 3,
      subject: 'Invitation to Join Forks High Chess Club',
      sender: 'Eric Yorkie',
      date: 'Sep 3, 2024',
      content: `Hey Annabelle, <br><br>
  
  Welcome to Forks High! I'm Eric, and I run the Chess Club here. We meet every Thursday after school in room 102. It's a great way to meet new people and challenge your brain. All skill levels are welcome, from grandmasters to those who have never moved a pawn.
  
  Let me know if you're interested or have any other questions about the school or clubs.`,
      signOff: 'Yours, Eric Yorkie',
    },
    {
      id: 4,
      subject: 'Can You Believe This Rain?',
      sender: 'Mike Newton',
      date: 'Sep 4, 2024',
      content: `Hey Annabelle, <br><br>
   
  I'm Mike, one of your classmates. Noticed you're new to Forks and thought I'd reach out. You picked quite the place to move to, especially with our never-ending rain, right? 😅
  
  If you're looking for things to do on a rainy day or just want some company exploring around, our group is always open to new friends. Also, we're planning a movie night this Saturday if you're interested.`,
      signOff: 'Catch you later, Mike',
    },
    {
      id: 5,
      subject: 'Volunteer Opportunities with the Quileute Community',
      sender: 'Jacob Black',
      date: 'Sep 5, 2024',
      content: `Hey Annabelle, Where Ya Been Loca!? <br><br>
  
  I'm Jacob, from the Quileute Tribe in La Push. Welcome to the area! We're always looking for volunteers to help with community projects, beach cleanups, and cultural events. It's a great way to meet people and learn about the rich history of this place.
  
  If you're interested or just want to visit La Push (best beaches around, trust me), let me know. We also have a bonfire coming up, which is perfect for making new friends.`,
      signOff: ' Hope to see you around, Jacob',
    },
    {
      id: 6,
      subject: 'Reminder: Library Books Due',
      sender: 'Angela Weber',
      date: 'Sep 6, 2024',
      content: `Hi Annabelle, <br><br>
  
  I'm Angela, one of the library assistants here at Forks High. I noticed you checked out a few books last week (great choices, by the way!). Just a friendly reminder that they're due back next Wednesday.
  
  Also, if you ever need recommendations or help with research projects, I'm here to help. The library is a great place to study or unwind.`,
      signOff: '  See you around, Angela',
    },
    {
      id: 7,
      subject: 'Forks High Photography Club Invitation',
      sender: 'Jessica Stanley',
      date: 'Sep 7, 2024',
      content: `Hi Annabelle, <br><br>
   
  Welcome to Forks! I'm Jessica, president of the Photography Club. We're all about capturing the stunning landscapes and unique moments around here. Whether you're a pro or just starting, we'd love to have you join us.
  
  Our first meeting is next Friday in room 205 after school. We'll be planning our first photo walk and discussing project ideas. Plus, snacks will be provided!`,
      signOff: ' Hope to see you there,Jessica',
    },
    {
      id: 8,
      subject: 'Get Ready for the Forks High Debate Team',
      sender: 'Lauren Mallory',
      date: 'Sep 8, 2024',
      content: `Annabelle, <br><br>
  
  Considering you're new to Forks High, you might not know about our championship-winning Debate Team. I'm Lauren, the team captain. We tackle everything from environmental policies to classic literature debates.
  
  If you're interested in joining or just want to see what it's all about, come to our meeting this Thursday in the auditorium. No experience necessary, just bring your passion and your arguments.`,
      signOff: '  Best, Lauren',
    },
    {
      id: 9,
      subject: 'Secret Spots in Forks',
      sender: 'Emmett Cullen',
      date: 'Sep 9, 2024',
      content: `Hey Annabelle, <br><br>
  
  Emmett here. Heard you're new to Forks and thought you might appreciate some insider info. Forks might seem small, but there are plenty of cool spots if you know where to look.
  
  If you're into hiking or just want to see some incredible views, let me or any of the Cullens know. We're pretty much experts on the best hidden gems around here.`,
      signOff: ' Welcome to Forks, Emmett',
    },
  ];
  
  
const Home = () => {
  const [selectedEmail, setSelectedEmail] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredEmails = emails.filter((email) =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
        <div className="characters-hero">
      <h1>Home</h1>
    </div>
    <div className="email-dashboard">
      <div className="window-header">
        <div className="window-title">Email Dashboard</div>
        <div className="window-controls">
          <button className="minimize-button">-</button>
          <button className="maximize-button">+</button>
          <button className="close-button">x</button>
        </div>
      </div>

      <div className='email-screen'>
      <div className='email-sidebar'>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search emails"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="email-list">
        <h2>Emails</h2>
        <ul>
          {filteredEmails.map((email) => (
            <li key={email.id} onClick={() => setSelectedEmail(email)}>
              {email.subject} - {email.sender} ({email.date})
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="email-content">
        {selectedEmail && (
          <>
            <h2>{selectedEmail.subject}</h2>
            <p>
              <strong>{selectedEmail.sender}</strong> - {selectedEmail.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: selectedEmail.content }} />
            <p>
              <strong>{selectedEmail.signOff}</strong>
            </p>
          </>
        )}
      </div>
      </div>
    </div>
    </>
  );
};

export default Home;