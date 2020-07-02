import React from 'react';

export default function Persons({
  filtered,
  persons,
  filteredName,
  deleteEntry,
}) {
  return (
    <div>
      {!filtered ? (
        persons.map((n) => (
          <div key={n.name}>
            <div>
              {n.name} {n.number}
            </div>
            <button onClick={() => deleteEntry(n.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>
          {filteredName.map((n) => (
            <div key={n.name}>
              <div>
                {n.name} {n.number}
              </div>
              <button onClick={() => deleteEntry(n.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
