
const usersApi = 'https://jekwxfohagnknpkqdgdo.supabase.co/rest/v1/users';
const apikey = "sb_publishable_5H15oY-8n1QtXELqWorURg_FvFk-0Ha";

export default async function fetchUsers() {
    const res = await fetch(usersApi, {
      headers: {
        apikey
      }
    });

    const data = await res.json();
 console.log(data);
 
    const sortedData = data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    console.log(sortedData);
    
    return sortedData;
  };