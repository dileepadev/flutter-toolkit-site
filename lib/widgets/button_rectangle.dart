import 'package:flutter/material.dart';

class ButtonRectangle extends StatelessWidget {
  final String name;
  final VoidCallback onPressed;
  final String message;

  const ButtonRectangle({
    super.key,
    required this.name,
    required this.onPressed,
    required this.message,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: ElevatedButton(onPressed: onPressed, child: Text(name)),
    );
  }
}
