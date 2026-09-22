const usersApi = 'https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users';
const apikey = "sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha";

export default async function fetchUsers() {
    const res = await fetch(usersApi, {
      headers: {
        apikey
      }
    });

    const data = await res.json();

    return data;
  };