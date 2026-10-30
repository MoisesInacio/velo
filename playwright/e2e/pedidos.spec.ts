import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');


  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
  
  await page.getByTestId('search-order-id').click();
  await page.getByTestId('search-order-id').fill('VLO-6E2j20');
  await page.getByTestId('search-order-button').click();

  await expect(page.getByRole('heading', { name: 'Pedido não encontrado' })).toBeVisible();
  await expect(page.locator('#root')).toContainText('Verifique o número do pedido e tente novamente');
});