const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
client.on('ready', () => {
  console.log(chalk.bgGreen.black('I\'m Online\nI\'m Online'));

  client.user.setStatus('online')

  client.user.setActivity('With Langreegid *SC for Commands')

});
client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.send(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!${member.user.username}Please use *SC for commands`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.send(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildBanAdd',(guild, user) => {
  guild.defaultChannel.send(`${user.username} was just banned!`);
});

client.on('guildBanRemove',(guild, user) => {
  guild.defaultChannel.send(`${user.username} was just unbanned!`);
});

client.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  if (channel.type === 'text') return channel.send('You were successful in creating this channel.');
});

client.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
   guild.defaultChannel.send('Channel Deleted');
});

client.on('channelPinsUpdate', (channel, time) => {
  guild.defaultChannel.send(`The pins for ${channel.name} have been updated at ${time}`);
});

client.on('messageDelete', msg => {
  guild.defaultChannel.send(`A message with the contents ${msg.cleanContent} was deleted from ${msg.channel}`);
});

client.on('messageDeleteBulk', messages => {
  console.log(`${messages.size} was deleted`);
});

//commands//

var prefix = '*'
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'YT')) {
     message.channel.send('https://www.youtube.com/c/LangreegidGaming');
  }

  if (message.content.startsWith(prefix + 'Streamont')) {
     message.channel.send('@everyone Stream Is Still On Twitch SO Come Check It Out https://www.twitch.tv/langreegid_gaming');
  }

  if (message.content.startsWith(prefix + 'TW')) {
     message.channel.send('https://twitter.com/Langreegid_G');
  }

  if (message.content.startsWith(prefix + 'Insta')) {
     message.channel.send('https://www.instagram.com/langreegid_gaming/');
  }

  if (message.content.startsWith(prefix + '490 FB')) {
     message.channel.send('https://www.youtube.com/redirect?v=HCuJB0JwoxM&event=video_description&redir_token=iMJKq-QYZCjVhHWXbOJpdeTR5ft8MTUxOTEwNTc5MEAxNTE5MDE5Mzkw&q=https%3A%2F%2Fwww.facebook.com%2FBulldog490%2F')
  }

  if (message.content.startsWith(prefix + 'Merch')) {
     message.channel.send('https://www.youtube.com/redirect?v=HCuJB0JwoxM&event=video_description&redir_token=iMJKq-QYZCjVhHWXbOJpdeTR5ft8MTUxOTEwNTc5MEAxNTE5MDE5Mzkw&q=https%3A%2F%2Fteespring.com%2Ffirst-shirt-ever%23pid%3D2%26cid%3D2122%26sid%3Dfront');
  }

  if (message.content.startsWith(prefix + 'SC')) {
     message.channel.send('```Langreegid Bot Commands\nYt:Langreegids Youtube\nTW:Langreegids Twitter\nInsta:Langreegids Insatgram\n490 FB:Bulldog490s Facebook (Guy that did Langreegids custom Iracing paints)\nMerch:The one teeshirt that YOU should buy\nSC:Langreegids Bot Commands\nDonate:My paypal so you can donate money\nDiscord Inv:The Discord Invite Code\n No Prefix cmds=\n quote = a random qoute from a giant list``` ');
  }

  if (message.content.startsWith(prefix + 'Donate')) {
     message.channel.send('https://www.paypal.me/LangreegidGaming');
  }

  if (message.content.startsWith(prefix + 'Discord Inv')) {
     message.channel.send('https://discord.gg/ehrnwTn');
  }

  if (message.content.startsWith(prefix + 'TEST')) {
     message.channel.send('Reciving Test Result \n100%');

  }

  if (message.content.startsWith(prefix + 'Stream 1hr')) {
     message.channel.send('@everyone Stream will be satrting in 1 hour so come and check it out on Youtube');

  }

  if (message.content.startsWith(prefix + 'Stream 30min')) {
     message.channel.send('@everyone Stream will be satrting in 30 minutes so come and check it out on Youtube');

  }

  if (message.content.startsWith(prefix + 'Stream 10min')) {
     message.channel.send('@everyone Stream will be satrting in 10 minutes so come and check it out on Youtube');

  }

  if (message.content.startsWith(prefix + 'Stream starting')) {
     message.channel.send('@everyone The stream is starting so come and check it out on Youtube');
  }

  if (message.content.startsWith(prefix + 'Streamt 1hr')) {
    message.channel.send('@everyone Stream will be satrting in 1 hour so come and check it out on Twitch');

  }

 if (message.content.startsWith(prefix + 'Streamt 30min')) {
    message.channel.send('@everyone Stream will be satrting in 30 minutes so come and check it out on Twitch');

 }

 if (message.content.startsWith(prefix + 'Streamt 10min')) {
    message.channel.send('@everyone Stream will be satrting in 10 minutes so come and check it out on Twitch');

 }

 if (message.content.startsWith(prefix + 'Streamt starting')) {
    message.channel.send('@everyone The stream is starting so come and check it out on Twitch');
  }

  const responses = [
  "Life isn’t about getting and having, it’s about giving and being. author, Kevin Kruse",
  "Whatever the mind of man can conceive and believe, it can achieve.author, Napoleon Hill",
  "Strive not to be a success, but rather to be of value. author, Albert Einstein",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. author, Robert Frost",
  "I attribute my success to this: I never gave or took any excuse. author, Florence Nightingale",
  "You miss 100% of the shots you don’t take. author, Wayne Gretzky",
  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. author, Michael Jordan",
  "The most difficult thing is the decision to act, the rest is merely tenacity. author, Amelia Earhart",
  "Every strike brings me closer to the next home run. author, Babe Ruth",
  "We must balance conspicuous consumption with conscious capitalism. author, Kevin Kruse",
  "Life is what happens to you while you’re busy making other plans. author, John Lennon",
  "We become what we think about. author, Earl Nightingale",
  "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. author, Mark Twain",
  "Life is 10% what happens to me and 90% of how I react to it. author, Charles Swindoll",
  "The most common way people give up their power is by thinking they don’t have any. author, Alice Walker",
  "The mind is everything. What you think you become. author, Buddha",
  "The best time to plant a tree was 20 years ago. The second best time is now. author, Chinese Proverb",
  "An unexamined life is not worth living. author, Socrates",
  "Eighty percent of success is showing up. author, Woody Allen",
  "Your time is limited, so don’t waste it living someone else’s life. author, Steve Jobs",
  "Winning isn’t everything, but wanting to win is. author, Vince Lombardi",
  "I am not a product of my circumstances. I am a product of my decisions. author, Stephen Covey",
  "Every child is an artist.  The problem is how to remain an artist once he grows up. author, Pablo Picasso",
  "You can never cross the ocean until you have the courage to lose sight of the shore. author, Christopher Columbus",
  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. author, Maya Angelou",
  "Either you run the day, or the day runs you. author, Jim Rohn",
  "Whether you think you can or you think you can’t, you’re right. author, Henry Ford",
  "The two most important days in your life are the day you are born and the day you find out why. author, Mark Twain",
  "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it. author, Johann Wolfgang von Goethe",
  "The best revenge is massive success. author, Frank Sinatra",
  "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. author, Zig Ziglar",
  "Life shrinks or expands in proportion to one’s courage. author, Anais Nin",
  "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced. author, Vincent Van Gogh",
  "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. author, Aristotle",
  "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. author, Jesus",
  "The only person you are destined to become is the person you decide to be. author, Ralph Waldo Emerson",
  "Go confidently in the direction of your dreams.  Live the life you have imagined. author, Henry David Thoreau",
  "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. author, Erma Bombeck",
  "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. author, Booker T. Washington",
  "Certain things catch your eye, but pursue only those that capture the heart. author,  Ancient Indian Proverb",
  "Everything you’ve ever wanted is on the other side of fear. author, George Addair",
  "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. author, Plato",
  "Teach thy tongue to say, “I do not know,” and thous shalt progress. author, Maimonides",
  "Start where you are. Use what you have.  Do what you can. author, Arthur Ashe",
  "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life. author, John Lennon",
  "Fall seven times and stand up eight. author, Japanese Proverb",
  "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. author, Helen Keller",
  "Everything has beauty, but not everyone can see. author, Confucius",
  "How wonderful it is that nobody need wait a single moment before starting to improve the world. author, Anne Frank",
  "When I let go of what I am, I become what I might be. author, Lao Tzu",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away. author, Maya Angelou",
  "Happiness is not something readymade.  It comes from your own actions. author, Dalai Lama",
  "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. author, Sheryl Sandberg",
  "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. author, Aristotle",
  "If the wind will not serve, take to the oars. author, Latin Proverb",
  "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. author, Unknown",
  "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. author, Marie Curie",
  "Too many of us are not living our dreams because we are living our fears. author, Les Brown",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful. author, Joshua J. Marine",
  "If you want to lift yourself up, lift up someone else. author, Booker T. Washington",
  "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. author, Leonardo da Vinci",
  "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. author, Jamie Paolinetti",
  "You take your life in your own hands, and what happens? A terrible thing, no one to blame. author, Erica Jong",
  "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. author, Bob Dylan",
  "I didn’t fail the test. I just found 100 ways to do it wrong. author, Benjamin Franklin",
  "In order to succeed, your desire for success should be greater than your fear of failure. author, Bill Cosby",
  "A person who never made a mistake never tried anything new. author,  Albert Einstein",
  "The person who says it cannot be done should not interrupt the person who is doing it. author, Chinese Proverb",
  "There are no traffic jams along the extra mile. author, Roger Staubach",
  "It is never too late to be what you might have been. author, George Eliot",
  "You become what you believe. author, Oprah Winfrey",
  "I would rather die of passion than of boredom. author, Vincent van Gogh",
  "A truly rich man is one whose children run into his arms when his hands are empty. author, Unknown",
  "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. author, Ann Landers",
  "If you want your children to turn out well, spend twice as much time with them, and half as much money. author, Abigail Van Buren",
  "Build your own dreams, or someone else will hire you to build theirs. author, Farrah Gray",
  "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. author, Jesse Owens",
  "Education costs money.  But then so does ignorance. author, Sir Claus Moser",
  "I have learned over the years that when one’s mind is made up, this diminishes fear. author, Rosa Parks",
  "It does not matter how slowly you go as long as you do not stop. author, Confucius",
  "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. author, Oprah Winfrey",
  "Remember that not getting what you want is sometimes a wonderful stroke of luck. author, Dalai Lama",
  "You can’t use up creativity.  The more you use, the more you have. author, Maya Angelou",
  "Dream big and dare to fail. author, Norman Vaughan",
  "Our lives begin to end the day we become silent about things that matter. author, Martin Luther King Jr.",
  "Do what you can, where you are, with what you have. author, Teddy Roosevelt",
  "If you do what you’ve always done, you’ll get what you’ve always gotten. author, Tony Robbins",
  "Dreaming, after all, is a form of planning. author, Gloria Steinem",
  "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. author, Mae Jemison",
  "You may be disappointed if you fail, but you are doomed if you don’t try. author, Beverly Sills",
  "Remember no one can make you feel inferior without your consent. author, Eleanor Roosevelt",
  "Life is what we make it, always has been, always will be. author, Grandma Moses",
  "The question isn’t who is going to let me; it’s who is going to stop me. author, Ayn Rand",
  "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. author, Henry Ford",
  "It’s not the years in your life that count. It’s the life in your years. author, Abraham Lincoln",
  "Change your thoughts and you change your world. author, Norman Vincent Peale",
  "Either write something worth reading or do something worth writing. author, Benjamin Franklin",
  "Nothing is impossible, the word itself says, “I’m possible!” author, –Audrey Hepburn",
  "The only way to do great work is to love what you do. author, Steve Jobs",
  "If you can dream it, you can achieve it. author, Zig Ziglar"
  ]
  if (message.content.startsWith('quote')) {
     message.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`);
  }
   });
client.login(process.env.BOT_TOKEN);
