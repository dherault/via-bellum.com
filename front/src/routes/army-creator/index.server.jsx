import {Suspense} from 'react';
import Layout from '../../components/Layout';

import ArmyViewer from '../../components/ArmyViewer.client';

export default function ArmyCreator() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <ArmyViewer />
      </Suspense>
    </Layout>
  );
}
