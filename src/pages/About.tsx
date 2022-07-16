import { FormEvent, useState } from "react";

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [output, setOutput] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOutput(`${firstName} ${lastName}`);
  };

  return (
    <section className="about">
      <p>Here is about page</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          id="firstName"
          value={firstName}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          id="lastName"
          value={lastName}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button id="submit">Submit</button>
      </form>
      <p id="output">{output}</p>
    </section>
  );
};

export default About;
