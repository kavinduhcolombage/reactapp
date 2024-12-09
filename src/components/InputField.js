// src/components/InputField.js
import React from 'react';

function InputField({ label, type, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '0.5rem',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
}

export default InputField;
