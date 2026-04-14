const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<EditableProfile />);

function EditableProfile() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [firstName, setFirstName] = React.useState('Jane');
  const [lastName, setLastName] = React.useState('Jacobs');

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(!isEditing);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First name:{' '}
        {isEditing
          ? <input value={firstName} onChange={e => setFirstName(e.target.value)} />
          : <b>{firstName}</b>
        }
      </label>
      <label>
        Last name:{' '}
        {isEditing
          ? <input value={lastName} onChange={e => setLastName(e.target.value)} />
          : <b>{lastName}</b>
        }
      </label>
      <button type="submit">
        {isEditing ? 'Save Profile' : 'Edit Profile'}
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}