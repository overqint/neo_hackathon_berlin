# neo_hackathon_berlin
Our Repo for the NEO hackathon Berlin 27-28.10.2018

Let’s rock the hackathon!

General Hackathon Info
https://neo.org/event/details/49
https://discord.io/neo
https://github.com/neo-ngd/Hackathon/blob/master/events/10.27-NEO-Blockchain-Hackathon-Berlin.md

NFT Token
https://github.com/Splyse/neo-nft-template
https://nonfungible.com/

Objective:
Design and develop dApps based on Non-fungible Token Standard which defines a standard non-fungible token system for the NEO Smart Economy.

Scoring:
The score will be judged by:
Functionality: Did your project fulfill all of the criteria show on the table above? How could you try to take what is required and add onto it to make it stand out?
Ease to Use: Is the User-experience welcoming and not awfully complicated to new and concurrent users of the platform? Try to let other test for you to see if the system you built is intuitive.
Stability: Have you tested the reliability and amount of downtime for the dApp? We are looking for a system that can be consistent and relay information to user without many bugs.
dApp Performance: How much resource does the dApp take to run, short and long term? We encourage developers to optimize the platform in hopes to see a platform that won't hinder the user's inputs and experience as a whole.
Interface Design: Does the design of the platform not only reflect the themes of NEO's ecosystem but also have a look that can differentiate it from the others? Fluid and modern designs could make the website feel more approachable.

Preparation for non coders:
open github account
GIT interactive tutorial: https://try.github.io/
Do the basic web design course: https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5

Preparation for coders:
Resources
NEO Blockchain - Browser interaction library
https://github.com/CityOfZion/neon-js

Tutorials:
Interact with Smart Contracts:
https://www.youtube.com/watch?v=ZZXz261AXrM

Some usefull commands:

turn on smart contract events:
$ config sc-events on

NFT template:
https://github.com/Splyse/neo-nft-template/blob/master/nft_template.py

Simple example:

Build and test the name method: 
build examples/nft_template.py test 0710 05 True True False name []

Get the name of the smart contract:
testinvoke 0x50c84208cdf84495b13bf98d7ded7b66e3f255e1 name 0710 05 True True False

More complex example:
build:
build /smart-contracts/nft_template.py 0710 05 True True False

import contract:
import contract /smart-contracts/nft_template.avm 0710 05 True True False

put properties into the smart contract
testinvoke 0xd23d8fdd36b5490ba3dc5af4ecf94349e0621800 mintToken ["AK2nJJpJr6o664CWJKi1QRXjqeic2z
Rp8y", "manufacturer_id:MF1234;mileage:10000", "/mfc/MF1234"]

get properties from the smart contract
testinvoke 0xd23d8fdd36b5490ba3dc5af4ecf94349e0621800 tokensDataOfOwner ["AK2nJJpJr6o664CWJKi1QR
Xjqeic2zRp8y", 0]


# Installation web backend
- Create env python 3.6 and activate it
- Go to folder python_web_backend
- Install requirement.tx file
```
pip install -r requirements.txt
```
- Start the flask server
```
python manage.py runserver
```
