export default function InputError({ error, message = null }) {
  if (message === null) message = error;
  return (
    <>
      {error && (
        <p className="text-xs text-red-700 mt-2 text-start">{message}</p>
      )}
    </>
  );
}
