import React from 'react';

const Privacy = () => (
  <div
    style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: '#111',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(255,255,255,0.05)',
      }}
    >
      <h1 style={{ color: '#ccc', marginBottom: '1rem' }}>Política de Privacidad</h1>
      <p>
        Tu privacidad es importante para nosotros. Esta página explica cómo recopilamos, usamos y protegemos tu información personal.
      </p>
      <h2 style={{ color: '#aaa', marginTop: '1.5rem' }}>Recopilación de información</h2>
      <p>
        Solo recopilamos la información necesaria para brindarte nuestros servicios, como tu nombre y correo electrónico.
      </p>
      <h2 style={{ color: '#aaa', marginTop: '1.5rem' }}>Uso de la información</h2>
      <p>
        Utilizamos tus datos únicamente para mejorar tu experiencia y nunca los compartimos con terceros sin tu consentimiento.
      </p>
      <h2 style={{ color: '#aaa', marginTop: '1.5rem' }}>Protección de datos</h2>
      <p>
        Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados.
      </p>
      <h2 style={{ color: '#aaa', marginTop: '1.5rem' }}>Contacto</h2>
      <p>
        Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos en cualquier momento.
      </p>
    </div>
  </div>
);

export default Privacy;