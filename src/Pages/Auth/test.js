useEffect(() => {
    const fetchLocations = async () => {
      const response = await supabase.from('parking_spaces').select('*');
      console.log('Raw response:', response);
    };
    fetchLocations();
  }, []);
  