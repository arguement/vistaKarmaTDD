describe("remove package",function(){

    const package = {id: 1,name: "wedding"};

    
    beforeAll(function(){
        // myObj = {
        //     removePackage(){
        //         return 10;
        //     }
        // }
    })

    afterAll(function(){
        // myObj = {}
    })
    
    it("should be defined",function(){
        
        // check if package exist
        expect(myObj.removePackage(package)).toBeTruthy();
        
    })

    it("check that package exist before removal",function(){

        let packageList = myObj.getPackages();

        expect(packageList).toBeInstanceOf(Array)
        expect(packageList).toContain(package)
    })
    
    

    it("package is removed, it no longer exist in the system",function(){
        
        
        myObj.removePackage(package)
        spyOn(myObj,"doesPackageExist").and.returnValue(false)
        const isThere = myObj.doesPackageExist(package)
        expect(isThere).toBe(true);
    })

    it("should call doesPackageExist",function(){

        myObj.removePackage(package)
        spyOn(myObj,"doesPackageExist").and.returnValue(false)
        const isThere = myObj.doesPackageExist(package)

        expect(myObj.doesPackageExist).toHaveBeenCalledWith(package);
    })

    it("remove a package when none is there",function(){

        let packageList = myObj.getPackages();

        
        myObj.removePackage(package);

        let packageListAfterRemoval = myObj.getPackages();

        expect(packageList).toEqual(packageListAfterRemoval);


    })

    

   
})