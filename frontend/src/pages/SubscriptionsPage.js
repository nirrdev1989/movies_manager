import styled from 'styled-components'
import NavigateButton from '../components/components-utils/NavigateButton'
import { useRenderContent } from '../hooks/renderContent'
import { RenderRoutes } from '../router/Routes'


function SubscriptionsPage({ childrenRoutes, currentUser, history, match }) {
   const pathname = history.location.pathname
   const [render] = useRenderContent(pathname.includes('edit_member') || pathname.includes('add_member'), pathname)

   return (
      <div>
         {render &&
            <Navbar>
               <NavigateButton content="All Members" url={`${match.url}/all`} />
               {currentUser.premissions.includes('add members') && <NavigateButton content="Add Member" url={`${match.url}/add_member`} />}
            </Navbar>
         }
         <RenderRoutes routes={childrenRoutes} />
      </div>
   )
}

export default SubscriptionsPage

const Navbar = styled.div`
   width: 100%;
   display: flex;
   > button {
      width: 120px;
      height: 40px;
      /* background-color: transparent; */
   }
`