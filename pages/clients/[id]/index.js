import { useRouter } from "next/router";

function ClientProjectsPage(){
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler(){
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query:{id: 'max', clientprojectid: 'project'}
    });

  }
  return (
    <div>
      <h1>The Proejcts of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}
export default ClientProjectsPage;