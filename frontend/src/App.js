import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import StockForm from "./components/StockForm";
import StockTable from "./components/StockTable";
import Header from './components/Header';
import { getStocks, addStock, updateStock, deleteStock } from "./services/stockService";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [showStockForm, setShowStockForm] = useState(false);
  
  useEffect(() => {
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
    };
    
    fetchStocks();
  }, []);

  const handleAddStock = async (stock) => {
    const newStock = await addStock(stock);
    setStocks([...stocks, newStock]);
    setShowStockForm(false);
  };

  const handleUpdateStock = async (updatedStock) => {
    const updated = await updateStock(updatedStock);
    setStocks(stocks.map(stock => stock.id === updated.id ? updated : stock));
  };

  const handleDeleteStock = async (id) => {
    await deleteStock(id);
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  const closeForm = () => {
    setShowStockForm(false); // Close the form when cancel or submit is clicked
  };

  return (
    <Router>
    <div className="App">
      {/* <Header /> */}
      <Header onAddStockClick={() => setShowStockForm(true)} /> {/* Pass the click handler to Header */}
        
        {showStockForm && (
          <StockForm 
            onAddStock={handleAddStock} 
            onUpdateStock={handleUpdateStock}
            closeForm={closeForm}
          />
        )}
      <Dashboard stocks={stocks} />
      {/* <StockForm onAddStock={handleAddStock} onUpdateStock={handleUpdateStock} /> */}
      <StockTable 
        stocks={stocks} 
        onDeleteStock={handleDeleteStock} 
        onUpdateStock={handleUpdateStock} 
      />
    </div>
    </Router>
  );
};

export default App;
