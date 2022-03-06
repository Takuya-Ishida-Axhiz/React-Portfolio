import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Login } from '../ components/pages/Login'
import { Page404 } from '../ components/pages/Page404'
import { HeaderLayout } from '../ components/templates/HeaderLayout'
import { ProtectedRoute } from './ProtectedRoute'
import { Home } from '../ components/pages/Home'
import { Setting } from '../ components/pages/Setting'
import { UserManagement } from '../ components/pages/UsarManagement'
import { GitHub } from '../ components/pages/GitHub'

export const Router: VFC = memo(() => {
  return (
    <>
      <HeaderLayout>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/" exact component={Home} />
          {/* <ProtectedRoute path="/setting" component={Setting} /> */}
          <ProtectedRoute path="/github" component={GitHub} />
          <ProtectedRoute
            path="/user_management"
            exact
            component={UserManagement}
          />
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </HeaderLayout>
    </>
  )
})
