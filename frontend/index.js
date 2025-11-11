async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.

const learnersRes = await axios.get('http://localhost:3003/api/learners')
const mentorsRes = await axios.get('http://localhost:3003/api/mentors')

let learners = learnersRes.data
let mentors = mentorsRes.data
  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  // 🧠 Combine learners and mentors.
  // ❗ At this point the learner objects only have the mentors' IDs.
  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]`
  // }
 const mentorNames = learner.mentors.map(id => {
    const found = mentors.find(mentor => mentor.id === id)
    return `${found.firstName} ${found.lastName}`
  })

  return {
    id: learner.id,
    fullName: learner.fullName,
    email: learner.email,
    mentors: mentorNames
  }
}

  // 👆 ==================== TASK 2 END ====================== 👆


  // 👇 ==================== TASK 3 START ==================== 👇

// looping over each learner object

    // 🧠 Flesh out the elements that describe each learner
    // ❗ Give the elements below their (initial) classes, textContent and proper nesting.
    // ❗ Do not change the variable names, as the code that follows depends on those names.
    // ❗ Also, loop over the mentors inside the learner object, creating an <li> element for each mentor.
    // ❗ Fill each <li> with a mentor name, and append it to the <ul> mentorList.
    // ❗ Inspect the mock site closely to understand what the initial texts and classes look like!
   for (let learner of learners) {
  const card = document.createElement('div')
  card.classList.add('card')

  const name = document.createElement('h3')
  name.classList.add('learner-name')
  name.textContent = learner.fullName

  const email = document.createElement('p')
  email.classList.add('learner-email')
  email.textContent = learner.email

  const mentorList = document.createElement('ul')
  mentorList.classList.add('mentor-list')

  for (let mentorName of learner.mentors) {
    const li = document.createElement('li')
    li.textContent = mentorName
    mentorList.appendChild(li)
  }

  card.appendChild(name)
  card.appendChild(email)
  card.appendChild(mentorList)
  cardsContainer.appendChild(card)

  card.addEventListener('click', () => {
    const selected = document.querySelector('.selected')
    if (selected) {
      selected.classList.remove('selected')
    }
    card.classList.add('selected')
    info.textContent = `${learner.fullName} is learning from ${learner.mentors.join(', ')}`
  })
}
    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener ('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    }
  

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
}

// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
