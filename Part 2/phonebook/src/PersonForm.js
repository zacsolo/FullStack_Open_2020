import React from 'react';

export default function PersonForm({
  handleSubmit,
  handleChange,
  newName,
  newNumber,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name='name' value={newName} onChange={handleChange} />
          number:{' '}
          <input name='number' value={newNumber} onChange={handleChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
}
