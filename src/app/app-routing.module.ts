import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/home/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/home/shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { AccountComponent } from './components/account/account.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReviewComponent } from './components/checkout/review/review.component';
import { CustomerInfoComponent } from './components/checkout/customer-info/customer-info.component';
import { PaymentInfoComponent } from './components/checkout/payment-info/payment-info.component';


//admin
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './admin/views/department/department.component';
import { DepartmentAddComponent } from './admin/views/department/department-add/department-add.component';
import { DepartmentEditComponent } from './admin/views/department/department-edit/department-edit.component';


const routes: Routes = [
  // App Routes goes here
  {
    path: 'products', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
    ]
  },
  

  { path: 'cart/shopping-cart', component: ShoppingCartComponent},
  { path: 'order/order-confirmation', component: OrderConfirmationComponent},
  { path: 'customer/my-account', component: AccountComponent},
  { path: 'customer/login', component: LoginComponent},
  { path: 'customer/register', component: RegisterComponent},
  { path: 'checkout', component: CheckoutComponent, data: {title: 'Check out'},
    children: [
      { path: 'review',  component: ReviewComponent,  data: {title: 'Order Review'} },
      { path: 'customer-information', component: CustomerInfoComponent,  data: {title: 'Customer Information'} },
      { path: 'payment-information', component: PaymentInfoComponent,  data: {title: 'Payment Information'} },
    ]
  },

  //Admin system

  //admin
  { path: 'admin', component: AdminComponent},

  //department
  { path: 'department', component: DepartmentComponent},
  { path: 'department/add-department', component: DepartmentAddComponent},

  //Focus on department_id between department-table.html and edit-department.html
  { path: 'department/edit-department/:department_id', component: DepartmentEditComponent},
  
   // otherwise redirect to home
   { path: '**', redirectTo: 'products' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
