import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Grid, List, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, searchProducts, getCategoryById } from "@/data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCategories = selectedCategory 
    ? categories.filter(cat => cat.id === selectedCategory)
    : categories;

  const searchResults = searchQuery ? searchProducts(searchQuery) : [];

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    setSearchParams(params);
  }, [searchQuery, selectedCategory, setSearchParams]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? "" : categoryId);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Product Catalog
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our comprehensive range of industrial products and supplies
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
                size="icon"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                onClick={() => setViewMode("list")}
                size="icon"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Filter */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "" ? "default" : "outline"}
                onClick={() => handleCategorySelect("")}
                size="sm"
              >
                All Categories
              </Button>
              {categories.slice(0, 10).map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategorySelect(category.id)}
                  size="sm"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count.toLocaleString()}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && searchResults.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Search Results ({searchResults.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <Card key={product.id} className="shadow-card hover:shadow-hover transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline">{product.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      Please contact directly for specific product and price
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Categories Display */}
        {!searchQuery && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {selectedCategory ? 
                `${getCategoryById(selectedCategory)?.name} Products` : 
                "Product Categories"}
            </h2>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCategories.map((category) => (
                  <Card key={category.id} className="shadow-card hover:shadow-hover transition-all duration-300 group">
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <Badge variant="secondary">
                        {category.count.toLocaleString()}+ Products
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      
                      {/* Product List */}
                      <div className="space-y-2 mb-4 max-h-60 overflow-y-auto">
                        {(selectedCategory ? category.products : category.products.slice(0, 8)).map((product, index) => (
                          <div key={index} className="text-xs text-muted-foreground py-1 px-2 bg-muted/30 rounded">
                            {product}
                          </div>
                        ))}
                        {!selectedCategory && category.products.length > 8 && (
                          <div className="text-xs text-primary font-medium">
                            +{category.products.length - 8} more products
                          </div>
                        )}
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-sm font-medium text-primary">
                          Please contact directly for specific product and price
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCategories.map((category) => (
                  <Card key={category.id} className="shadow-card hover:shadow-hover transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {category.name}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {category.description}
                          </p>
                          <Badge variant="secondary">
                            {category.count.toLocaleString()}+ Products
                          </Badge>
                        </div>
                        <div className="lg:w-1/3">
                          <div className="grid grid-cols-2 gap-1 text-xs max-h-48 overflow-y-auto">
                            {(selectedCategory ? category.products : category.products.slice(0, 6)).map((product, index) => (
                              <div key={index} className="text-muted-foreground p-1 bg-muted/30 rounded">
                                {product}
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t">
                            <p className="text-sm font-medium text-primary">
                              Please contact directly for specific product and price
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No products found
            </h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse our categories
            </p>
            <Button onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;