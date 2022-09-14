package com.project;

public class Usuario {
	
	private String nombre;
	private String apellido;
	private String fechaNacimiento;
	
	public Usuario (String nombre, String apellido, String fechaNac) {
		setApellido(apellido);
		setNombre(nombre);
		setFechaNacimiento(fechaNac);
	}
	
	
	
	
	protected String getNombre() {
		return nombre;
	}
	protected String getApellido() {
		return apellido;
	}
	private void setNombre(String nombre) {
		this.nombre = nombre;
	}
	private void setApellido(String apellido) {
		this.apellido = apellido;
	}
	protected String getFechaNacimiento() {
		return fechaNacimiento;
	}
	private void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	
	
		
}
