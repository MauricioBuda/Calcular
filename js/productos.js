let stockProductos = [
    {id: 0, nombre: "HFDE", tipo: "HFDE", cantidad: 1, desc: "Hora fuera de estandar", valor: 1},
    {id: 1, nombre: "Instalación", tipo: "ACTIVIDAD", cantidad: 1, desc: "Instalación", valor: 0.45},
    {id: 3, nombre: "Reparación", tipo: "ACTIVIDAD", cantidad: 1, desc: "Reparación, preventivo", valor: 1.25},
    {id: 2, nombre: "Conexión a red", tipo: "ACTIVIDAD", cantidad: 1, desc: "Conexión a red", valor: 1.25},
    {id: 4, nombre: "Montaje", tipo: "ACTIVIDAD", cantidad: 1, desc: "Montaje", valor: 0.45},
    {id: 6, nombre: "Asesoramiento", tipo: "ACTIVIDAD", cantidad: 1, desc: "Asesoramiento", valor: 0.7},
    {id: 5, nombre: "Reducción", tipo: "ACTIVIDAD", cantidad: 1, desc: "Reducción, desmontaje, desinstalación", valor: 0.7},
    {id: 7, nombre: "Reubicación", tipo: "ACTIVIDAD", cantidad: 1, desc: "Reubicación", valor: 1.3},
    {id: 9, nombre: "Continuación", tipo: "ACTIVIDAD", cantidad: 1, desc: "Continuación", valor: 0.45},
    {id: 8, nombre: "Ampliación", tipo: "ACTIVIDAD", cantidad: 1, desc: "Continuación", valor: 0.45},
    {id: 10, nombre: "Bidireccional", tipo: "ACTIVIDAD", cantidad: 1, desc: "Bidireccional", valor: 0.7},
    {id: 11, nombre: "Central comun", tipo: "CENTRAL", cantidad: 1, desc: "Neo, Vista, 585, Caddx", valor: 1},
    {id: 12, nombre: "Central climax", tipo: "CENTRAL", cantidad: 1, desc: "Central climax", valor: 0.49},
    {id: 13, nombre: "Central RSI", tipo: "CENTRAL", cantidad: 1, desc: "Central rsi", valor: 0.6},
    {id: 14, nombre: "Placa wifi RSI", tipo: "CENTRAL", cantidad: 1, desc: "Wifi RSI", valor: 0.4},
    {id: 15, nombre: "Gab estanco", tipo: "CENTRAL", cantidad: 1, desc: "Estanco roker", valor: 1},
    {id: 16, nombre: "Expansora", tipo: "CENTRAL", cantidad: 1, desc: "Cualquier exp de zona o fuente", valor: 1},
    {id: 17, nombre: "Receptora", tipo: "RECEPTORA", cantidad: 1, desc: "Neo, vista, 585, encryptor", valor: 0.4},
    {id: 18, nombre: "Camara cab", tipo: "CAMARAS", cantidad: 1, desc: "Varifocal y bulet", valor: 1.5},
    {id: 19, nombre: "Manager", tipo: "CAMARAS", cantidad: 1, desc: "Cualquier manager", valor: 0.75},
    {id: 20, nombre: "Disco rigido", tipo: "CAMARAS", cantidad: 1, desc: "Disco DVR", valor: 0.15},
    {id: 21, nombre: "Microfono", tipo: "CAMARAS", cantidad: 1, desc: "Mic para CCTV", valor: 1},
    {id: 22, nombre: "Monitor", tipo: "CAMARAS", cantidad: 1, desc: "Monitor 19' ", valor: 0.5},
    {id: 23, nombre: "Soporte LCD", tipo: "CAMARAS", cantidad: 1, desc: "Soporte de monitor", valor: 0.5},
    {id: 24, nombre: "Router", tipo: "CAMARAS", cantidad: 1, desc: "Router", valor: 1},
    {id: 25, nombre: "DVR", tipo: "CAMARAS", cantidad: 1, desc: "Dvr de 4, 8, 16", valor: 2},
    {id: 26, nombre: "Fuente camaras", tipo: "CAMARAS", cantidad: 1, desc: "Fuentes de 5, 10 y 30 amp", valor: 1},
    {id: 27, nombre: "Caja estanco", tipo: "CAMARAS", cantidad: 1, desc: "Estanco 8x8", valor: 0.5},
    {id: 28, nombre: "Detector blue", tipo: "DETECTOR", cantidad: 1, desc: "Doble o simple tecnologia", valor: 1},
    {id: 29, nombre: "OD850", tipo: "DETECTOR", cantidad: 1, desc: "DX, triple tec", valor: 1.5},
    {id: 30, nombre: "Detector inalambrico", tipo: "DETECTOR", cantidad: 1, desc: "Rsi, neo, vista, 585", valor: 0.4},
    {id: 31, nombre: "Detector climax", tipo: "DETECTOR", cantidad: 1,desc: "Ciego o pircam", valor: 0.29},
    {id: 32, nombre: "Detector AM", tipo: "DETECTOR", cantidad: 1, desc: "Antimasking", valor: 1.5},
    {id: 33, nombre: "Detector exterior i", tipo: "DETECTOR", cantidad: 1, desc: "Vxi, Dli, Vx601", valor: 1},
    {id: 34, nombre: "Detector exterior C", tipo: "DETECTOR", cantidad: 1, desc: "Vx, DL", valor: 1.5},
    {id: 35, nombre: "Pulsador pánico", tipo: "DETECTOR", cantidad: 1, desc: "PB1", valor: 1},
    {id: 36, nombre: "Detector techo", tipo: "DETECTOR", cantidad: 1, desc: "DU", valor: 1.5},
    {id: 37, nombre: "Sirena interna", tipo: "SIRENA", cantidad: 1, desc: "Mp100, o interna RSI", valor: 0.5},
    {id: 38, nombre: "Sirena externa", tipo: "SIRENA", cantidad: 1, desc: "mp400, o externa RSI", valor: 1},
    {id: 39, nombre: "Comunicador", tipo: "COMUNICADOR", cantidad: 1, desc: "Tyco, nano, gsm, neo, filtro ADSL", valor: 1},
    {id: 40, nombre: "Fuente Back Up", tipo: "COMUNICADOR", cantidad: 1, desc: "Back up celular Paradox", valor: 0.25},
    {id: 41, nombre: "Magnetico i", tipo: "MAGNETICO", cantidad: 1, desc: "Mi neo, vista, rsi, 585", valor: 0.35},
    {id: 42, nombre: "Magnetico c", tipo: "MAGNETICO", cantidad: 1, desc: "M puerta comun, o porton", valor: 1},
    {id: 43, nombre: "Magnetico climax", tipo: "MAGNETICO", cantidad: 1, desc: "Transmisor climax", valor: 0.29},
    {id: 44, nombre: "Teclado c", tipo: "TECLADO", cantidad: 1, desc: "Tec cableado neo, vista, 585, caddx..", valor: 1},
    {id: 45, nombre: "Teclado i", tipo: "TECLADO", cantidad: 1, desc: "Tec inalambrico, todos menos climax", valor: 0.4},
    {id: 46, nombre: "Teclado i climax", tipo: "TECLADO", cantidad: 1, desc: "Tec inalambrico climax", valor: 0.25},
    {id: 47, nombre: "Rele CF", tipo: "CF", cantidad: 1, desc: "Rele CF", valor: 0.5},
    {id: 48, nombre: "Caja Fuerte", tipo: "CF", cantidad: 1, desc: "Caja fuerte clasica/buzon", valor: 4},
]
