const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<SyncedInputs />);

function SyncedInputs() {
  const [text, setText] = React.useState(''); 

  return (
    <>
      <Input label="First input" value={text} onChange={setText} />
      <Input label="Second input" value={text} onChange={setText} />
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}
