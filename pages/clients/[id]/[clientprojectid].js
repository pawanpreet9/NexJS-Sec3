import { useRouter } from 'next/router';

function SelectedClientProjectPage(){
  const router = useRouter();

//console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Proejct Page for a Specific Project for a Selected Cleint </h1>
    </div>
  )
}
export default SelectedClientProjectPage;