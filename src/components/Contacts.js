import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.bing.com/ck/a?!&&p=92b619aa097622b8JmltdHM9MTcxMTA2NTYwMCZpZ3VpZD0xZGQzOTZhMS05ZTdiLTY3NzItMDM5ZC04NTNiOWZlZjY2YmEmaW5zaWQ9NTY2MA&ptn=3&ver=2&hsh=3&fclid=1dd396a1-9e7b-6772-039d-853b9fef66ba&u=a1L21hcHM_Jm1lcGk9MjR-flRvcE9mUGFnZX5NYXBfSW1hZ2UmdHk9MTgmcT1OYWJ1dGklMkMlMjBDZW50cmFsJTIwUmVnaW9uJTJDJTIwVWdhbmRhJnBwb2lzPTAuMzQ4NDYzODkyOTM2NzA2NTRfMzIuNzQ0NjM2NTM1NjQ0NTNfTmFidXRpJTJDJTIwQ2VudHJhbCUyMFJlZ2lvbiUyQyUyMFVnYW5kYV9-JmNwPTAuMzQ4NDY0fjMyLjc0NDYzNyZ2PTImc1Y9MSZGT1JNPU1JUkU&ntb=1"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;