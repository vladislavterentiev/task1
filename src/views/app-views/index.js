import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserList from "./pages/user-list";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        
        <Route path={`${APP_PREFIX_PATH}/main/clients/list`} component={UserList}/>
        
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);