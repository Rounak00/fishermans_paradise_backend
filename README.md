<h1>API's that are tested in Postman : -</h3> 

 **HealthCheck :** localhost:5000/api/health/
  
  **Authentication:** <br>
        1. Customer_Register => localhost:5000/api/auth/customer/register <br>2. Admin_Register => localhost:5000/api/auth/admin/register <br> 3. Customer_login => localhost:5000/api/auth/customer/login <br>4. Admin_Login =>  localhost:5000/api/auth/admin/login <br> 5. Fisherman_Register => localhost:5000/api/auth/fisherman/register <br> 6. Fisherman_Login => localhost:5000/api/auth/fisherman/login <br>
	**Admin :** <br>
	1. Admin_profile => localhost:5000/api/admin/ <br> 2. Admin_FishermanList => localhost:5000/api/admin/fishermansList <br> 3. Admin_ApprovedFishermanList => localhost:5000/api/admin/approvedFishermansList <br> 4. Admin_NotApproverFishermanList => localhost:5000/api/admin/notApprovedFishermansList <br> 5. admin_markApproved => localhost:5000/api/admin/markApproved/:id <br> 6. Admin_markNotApproved => localhost:5000/api/admin/markNotApproved/:id" <br>

  **Fisherman :** <br>
        1. Fisherman_Profile => localhost:5000/api/fisherman/profile <br> 2. Fisherman_addProduct => localhost:5000/api/fisherman/addProduct <br> 3. Fisherman_removeProduct => localhost:5000/api/fisherman/removeProduct/id <br> 4. Fisherman_updateProduct => localhost:5000/api/fisherman/updateProduct/:id <br> 5. GetAllProducts => localhost:5000/api/fisherman/getMyProducts <br>

**Customer :**  <br>
        1. Customer_Profile => localhost:5000/api/profile <br> 2. Customer_UpdateProfile => localhost:5000/api/updateProfile <br> 3. Customer_SearchProduct => localhost:5000/api/searchProduct?search=ruhi <br> 4. Customer_Products => localhost:5000/api/products <br> 5. Customer_AddOrder => localhost:5000/api/addOrder/:id? stat=Delivered&quantity=10  <br> 6. Customer_ShowOrder => localhost:5000/api/showOrder <br> 7. Cstomer_ShowCart => localhost:5000/api/showCart <br> 8. Customer_AddCart => localhost:5000/api/addCart/:id <br> 9. Customer_RemoveCart => localhost:5000/api/removeCart/:id <br>10. Customer_Buy => localhost:5000/api/buy/:id <br> 11. Customer_Product => localhost:5000/api/product/:id <br>
