import { createRouter, createWebHistory } from 'vue-router';
import HomeWorld from '@/views/HomeWorld.vue';
import CaptureNew from '@/components/CaptureNew.vue';
import QRCodeScanner from '@/components/QRCodeScanner.vue';
import ConsentPage from '@/components/ConsentPage.vue';
import DataCollection from '@/components/DataCollection.vue';
import CapturedData from '@/components/CapturedData.vue';

const routes = [
  { path: '/HomeWorld', component: HomeWorld },
  { path: '/capture-new', component: CaptureNew },
  { path: '/qr-code-scanner', component: QRCodeScanner },
  { path: '/consent', component: ConsentPage },
  { path: '/data-collection', component: DataCollection },
  { path: '/captured-data', component: CapturedData },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
