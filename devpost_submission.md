# Why make it?

Formatting documents to academic styles often requires a Google search here, some second-guessing there — and always once a student is tired from finishing an assignment. Our team's add-on ideally automates this task with minimal hassle. 

# What it does: 

Once installed and run, LazyCase assesses a Google Document's header text for proper capitalization by AP, Chicago, or MLA requirements according to most recent style guides. It also satisfies margin and paragraph-spacing requirements, if needed, while not disrupting body text.

# How we built it: 

Our team configured an external Google Apps Script environment in Visual Studio Code with Node.js. We wrote the code collaboratively, using GitHub for version control, before pushing with clasp to a central Google cloud IDE. 

# Challenges we faced: 

Some team members had limited experience with JavaScript. The initial version control-process and correctly accessing Apps Script's built-in methods also posed learning curves.

# Stuff we're proud of: 

All in all, we got a working product off the ground. We also collaborated on milestone challenges, communicating daily via Zoom and writing functions together.

# What we learned: 

We learned a lot about the necessity of version control and efficiently communicating our objectives for a multi-step process. We also familiarized ourselves with Google Apps Script's built-in functions. 

# What's next for LazyCase?

We want to expand our product with other styles such as APA. We also want to implement part-of-speech tagging to evaluate independent words in a corpus for context more accurately — e.g., the term "to" is capitalized in some style titles if preceding an infinitive, but it's lowercase if used as a preposition. Language possesses countless potential error cases only addressable by natural language processing, which is an entire field altogether. We would also upgrade LazyCase to address common typos and unconventional punctuation and remain up-to-date with shifting style conventions.

Built with: Google Apps Script, Visual Studio Code, JavaScript, HTML, Node.js, Git, Clasp

# Try it out: 

(link to GitHub repo)