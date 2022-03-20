import java.awt.EventQueue;

import javax.swing.JFrame;
import java.awt.GridLayout;
import javax.swing.JLabel;
import javax.swing.JComboBox;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.DefaultComboBoxModel;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class hola {

	private JFrame frame;
	private JTextField textField;
	private JTextField textField_1;
	private JTextField textField_2;
	private JTextField textField_3;
	private JComboBox operacion;
	private JLabel resultado;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					hola window = new hola();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public hola() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setBounds(100, 100, 450, 419);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.getContentPane().setLayout(new GridLayout(9, 2, 0, 0));
		
		JLabel num1 = new JLabel("Numero  1");
		frame.getContentPane().add(num1);
		
		textField = new JTextField();
		frame.getContentPane().add(textField);
		textField.setColumns(10);
		
		JLabel num2 = new JLabel("Numero 2");
		frame.getContentPane().add(num2);
		
		textField_1 = new JTextField();
		textField_1.setColumns(10);
		frame.getContentPane().add(textField_1);
		
		JLabel num3 = new JLabel("Numero 3");
		frame.getContentPane().add(num3);
		
		textField_2 = new JTextField();
		textField_2.setColumns(10);
		frame.getContentPane().add(textField_2);
		
		JLabel num4 = new JLabel("Numero 4");
		frame.getContentPane().add(num4);
		
		textField_3 = new JTextField();
		textField_3.setColumns(10);
		frame.getContentPane().add(textField_3);
		
		operacion = new JComboBox();
		operacion.setModel(new DefaultComboBoxModel(new String[] {"SUMAR", "RESTAR", "MULTIPLICAR", "DIVIDIR"}));
		frame.getContentPane().add(operacion);
		
		JButton calcular = new JButton("Calcular");
		calcular.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				//pillar el valor de la caja de texto numero 1
				float n1 = Float.parseFloat(num1.getText());
				float n2 = Float.parseFloat(num2.getText());
				float n3 = Float.parseFloat(num3.getText());
				float n4 = Float.parseFloat(num4.getText());
				
				float r;
				int indice =operacion.getSelectedIndex();
				switch(indice) {
				case 0:r = n1+n2+n3+n4; break;
				case 1:r = n1-n2-n3-n4; break;
				case 2:r = n1*n2*n3*n4; break;
				case 3:r = n1/n2/n3/n4; break;
				default: r = 0;
				
				}
				resultado.setText(r +"");
			}
		});
		frame.getContentPane().add(calcular);
		
		JButton limpiar = new JButton("Limpiar");
		//limpiar.addActionListener
		resultado = new JLabel("0");
		frame.getContentPane().add(resultado);
	}

}
