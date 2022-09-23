import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/rezepte/${search}`).then((r) => {});
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          className="search--input"
          type="search"
          placeholder="z. B. Knoblauchöl, Eintopf, Spätzle"
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <style jsx>{`
        .search {
          position: sticky;
          z-index: 100;
          top: 0;
          padding: 0 1rem;
        }

        .search--input {
          margin: 0 0 1rem 0;
          padding: 0 1rem;
          width: 100%;
          height: 3rem;
          font-size: 1rem;
          border: 0.1rem solid var(--primary);
          border-radius: 2rem;
        }
      `}</style>
    </div>
  );
}
