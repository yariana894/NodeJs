package Ejercicio1;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class SumarNumeros {
    private JPanel panel1;

    private JTextField valorNum1;
    private JTextField valorNum2;
    private JTextField valorNum3;
    private JTextField valorNum4;
    private JButton calcular;
    private JButton limpiar;
    private JLabel num1;
    private JLabel num2;
    private JLabel num3;
    private JLabel num4;
    private JLabel resultado;


    public SumarNumeros() {
        calcular.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                String valorNum1 = num1.getText();
                String valorNum2 = num2.getText();
                String valorNum3 = num3.getText();
                String valorNum4 = num4.getText();

                int r = Integer.parseInt(valorNum1) + Integer.parseInt(valorNum2) + Integer.parseInt(valorNum3) + Integer.parseInt(valorNum4);
                resultado.setText(r + "");
            }
        });
    }
}
