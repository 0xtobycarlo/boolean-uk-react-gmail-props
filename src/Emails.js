import Email from "./Email";

function RenderEmailsList(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            email={email}
            index={index}
            toggleStar={props.toggleStar}
            toggleRead={props.toggleRead}
          />
        ))}
      </ul>
    </main>
  );
}

export default RenderEmailsList;
